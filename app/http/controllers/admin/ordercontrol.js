const order = require("../../../models/order")

const Order = require('../../../models/order')

function ordercontrol(){
    return{
        index(req,res){
            order.find({ status: { $ne:'completed' } }, null, { sort: { 'time':-1 }} ).populate('customerid', '-password').exec((err,orders)=>{
               if(req.xhr){
                   return res.json(orders)
               }else{
                return res.render('admin/orders')
               }
            })        
        }
    }
}
module.exports = ordercontrol