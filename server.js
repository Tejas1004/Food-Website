const express = require('express')
require('dotenv').config()
const app = express()
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const path=require('path')
const mongoose=require('mongoose')
const session=require('express-session')
const flash=require('express-flash')
const MongoDbStore = require('connect-mongo')
const PORT= process.env.PORT||5000


//Database Connected
const dburl="mongodb+srv://Foodweb:Foodweb@website.1ktid.mongodb.net/pizza"
mongoose.connect(dburl);
const connection = mongoose.connection;
// When successfully connected
 connection.on('connected', function () {  
    console.log('Database Connected ' );
  }); 
  
  // If the connection throws an error
  connection.on('error',function (err) {  
    console.log('Database is not connected because of '+err);
  }); 
  
  // When the connection is disconnected
  connection.on('disconnected', function () {  
    console.log('Database connection disconnected'); 
  });
  // If the Node process ends, close the Mongoose connection 
     process.on('close', function() {  
     connection.close(function () { 
      console.log('Mongoose default connection disconnected through app termination'); 
      process.exit(0); 
    }); 
  }); 
//session config
app.use(session({
  secret:process.env.COOKIE_SECRET,
  resave:false,
  store:MongoDbStore.create({
    mongoUrl: dburl
}),
  saveUninitialized:false,
  cookie:{maxAge:1000*60*60*24}
}));
//session storing
/*let mongoStore = new MongoDbStore({
  mongooseConnection: connection,
  collection: 'sessions'
})*/

app.use(flash())
//Assets
app.use(express.static('public'))
app.use(express.json())
require('./routes/web')(app)


//Template Engine Setup
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('views engine','ejs')

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})