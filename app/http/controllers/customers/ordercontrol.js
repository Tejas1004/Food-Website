const Order = require("../../../models/order")
const moment = require('moment')
function ordercontrol(){
    return{
        store(req,res){
           //console.log(req.body);
           const{ phone,Address }=req.body
            if( !phone || !Address)
            {
                req.flash('error','All field are Required')
                return res.redirect('/cart')
            }
             const order = new Order({
                customerid : req.user._id,
                items: req.session.cart.items,
                phone:phone,
                Address:Address,
            })
            order.save().then(result =>{
                req.flash('success','Order Placed Successfully')
                delete req.session.cart
                return res.redirect('customers/orders')          
            }).catch(err=>{
                req.flash('error','Something issue Happened')
                return res.redirect("/cart")
            })
        },
        async index(req,res){
            const orders = await Order.find({ customerid: req.user._id })
             res.render('customers/orders.ejs', { orders: orders, moment: moment })
            console.log(orders);
        }
    }
}

module.exports = ordercontrol