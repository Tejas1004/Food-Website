function initRoutes(app){
    
app.get('/',(req,res)=>{
    res.render("home.ejs")
})
app.get('/cart',(req,res)=>{
    res.render('customers/cart.ejs')
})
app.get('/login',(req,res)=>{
    res.render('auth/login.ejs')
})
app.get('/register',(req,res)=>{
    res.render('auth/register.ejs')
})
}

module.exports=initRoutes