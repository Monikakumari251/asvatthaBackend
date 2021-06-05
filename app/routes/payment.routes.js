module.exports = app => {
    const payment = require("../controllers/payment.controller");
  
    // Create a new Customer
    app.post("/orders", payment.post);
  };


//   module.exports = app => {
//     // const payment = require("../controllers/payment.controller");
//     require("dotenv").config();
// const express = require("express");
// const Razorpay = require("razorpay");
  
//     // Create a new Customer
//     app.post("/orders", async (req, res) => {
//       console.log('process.env.RAZORPAY_KEY_ID', process.env.RAZORPAY_KEY_ID);
      
//         try {
//             const instance = new Razorpay({
//                 key_id: process.env.RAZORPAY_KEY_ID,
//                 key_secret: process.env.RAZORPAY_SECRET,
//             });
    
//             const options = {
//                 amount: 100, // amount in smallest currency unit
//                 currency: "INR",
//                 receipt: "receipt_order_74394",
//             };
    
//             const order = await instance.orders.create(options);
    
//             if (!order) return res.status(500).send("Some error occured");
    
//             res.json(order);
//         } catch (error) {
//             res.status(500).send(error);
//         }
//     });
//   };