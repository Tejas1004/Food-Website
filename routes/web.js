const authcontrol = require("../app/http/controllers/authcontrol");
const cartcontrol = require("../app/http/controllers/customers/cartcontrol");
const homecontrol = require("../app/http/controllers/homecontrol");
const guest=require("../app/http/middleware/guest");



function initRoutes(app) {
  //for home page
  app.get("/", homecontrol().index);
  //for cart page
  app.get("/cart", cartcontrol().cart);
  //for login page
  app.get("/login",guest, authcontrol().login);
  app.post("/login", authcontrol().postLogin);
  //for register page
  app.get("/register",guest, authcontrol().register);
  app.post("/register", authcontrol().postRegister);
  app.post('/logout',authcontrol().logout);
  //for updating cart
  app.post("/update-cart", cartcontrol().update);
}

module.exports = initRoutes;

