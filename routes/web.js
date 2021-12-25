const authcontrol = require("../app/http/controllers/authcontrol");
const homecontrol = require("../app/http/controllers/homecontrol");
const cartcontrol = require("../app/http/controllers/customers/cartcontrol");
const ordercontrol= require("../app/http/controllers/customers/ordercontrol");
const adminOrdercontrol= require('../app/http/controllers/admin/ordercontrol');
//Middleware
const guest=require("../app/http/middleware/guest");
const auth=require("../app/http/middleware/auth");
const admin=require("../app/http/middleware/admin");

function initRoutes(app) {
  //for home page
  app.get("/", homecontrol().index);
  //for cart page
  
  //for login page
  app.get("/login",guest, authcontrol().login);
  app.post("/login", authcontrol().postLogin);
  //for register page
  app.get("/register",guest, authcontrol().register);
  app.post("/register", authcontrol().postRegister);
  app.post('/logout',authcontrol().logout);
  //for updating cart
  app.get("/cart", cartcontrol().cart);
  app.post("/update-cart", cartcontrol().update);
//customer route
  app.post("/orders",auth,ordercontrol().store);
  app.get("/customers/orders",auth,ordercontrol().index)
  //Admin
  app.get('/admin/orders', admin, adminOrdercontrol().index)
  
}
module.exports = initRoutes;

