function authcontrol(){
    return{
        login(req,res){
            res.render('auth/login.ejs')
        },
        register(req,res){
            res.render('auth/register.ejs')
        },
    }
}
module.exports=authcontrol