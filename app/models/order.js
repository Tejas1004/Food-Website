const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderSchema = new Schema({
  customerid      : { 
                    type:  mongoose.Schema.Types.ObjectId,
                    ref:'User' ,
                    required: true },
  items       : { type: Object,  required: true},
  phone       : { type: String,  required:true },
  Address     : { type:String,   required:true},
  paymentType : { type:String,   default:'COD' },
  paymentstatus      : { type:String,   default:'order_placed' },
  time : { type : Date, default: Date.now }
})

module.exports = mongoose.model("Order", orderSchema)
