require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");

const Payment = require("../models/payment.model");

// const router = express.Router();

exports.post = async(req, res) => {
  console.log('reqreqreq', req);
  
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const options = {
            amount: 100, // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
  };

  // Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const payment = new Payment({
        name: req.body.name,
        mobile: req.body.mobile,
        village: req.body.village,
        district: req.body.district,
        city: req.body.city,
        state: req.body.state,
        email: req.body.email,
        address: req.body.address,
        aadhar: req.body.aadhar,
        amount: req.body.amount,
        pan_card: req.body.pan_card
    });
  
    // Save Customer in the database
    Payment.create(payment, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };