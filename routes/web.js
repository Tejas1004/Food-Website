const authcontrol = require("../app/http/controllers/authcontrol")
const cartcontrol = require("../app/http/controllers/customers/cartcontrol")
const homecontrol=require("../app/http/controllers/homecontrol")

function initRoutes(app){
//for home page    
app.get('/',homecontrol().index)
//for cart page
app.get('/cart',cartcontrol().cart)
//for login page
app.get('/login',authcontrol().login)
//for register page
app.get('/register',authcontrol().register)
//for updating cart
app.post('/update-cart',cartcontrol().update)
}
module.exports = initRoutes





/*(req,res)=>{
  res.render("home.ejs")
})

(req,res)=>{
    res.render('customers/cart.ejs')
})


(req,res)=>{
    res.render('auth/login.ejs')
})
(req,res)=>{
    res.render('auth/register.ejs')
})*/
