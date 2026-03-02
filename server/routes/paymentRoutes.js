const Razorpay = require("razorpay");
const express = require("express");

const router = express.Router();

const razorpay = new Razorpay({
  key_id: "YOUR_KEY",
  key_secret: "YOUR_SECRET"
});

router.post("/create", async (req,res)=>{

  const order = await razorpay.orders.create({
    amount: req.body.amount * 100,
    currency: "INR"
  });

  res.json(order);
});

module.exports = router;
