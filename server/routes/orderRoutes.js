const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

/* Place Order */
router.post("/place", async (req,res)=>{

  const order = new Order(req.body);

  await order.save();

  res.json("Order Placed");
});

/* My Orders */
router.get("/:userId", async (req,res)=>{

  const orders = await Order.find({
    userId: req.params.userId
  });

  res.json(orders);
});

module.exports = router;
