const Menu=require("../../models/menu.js")
function homecontrol(){
    return {
        async index(req, res) {
            const pizzas = await Menu.find()
            console.log(pizzas);
            return res.render('home.ejs', { pizzas: pizzas })
        }
    }
}
module.exports=homecontrol