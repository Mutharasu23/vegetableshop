const express = require("express");
const Cart = require("../models/Cart");

const router = express.Router();

/* Add to Cart */
router.post("/add", async (req, res) => {

  const { userId, productId } = req.body;

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({ userId, items: [] });
  }

  const index = cart.items.findIndex(
    i => i.productId == productId
  );

  if (index > -1) {
    cart.items[index].qty += 1;
  } else {
    cart.items.push({ productId, qty: 1 });
  }

  await cart.save();

  res.json("Added to cart");
});

/* Get Cart */
router.get("/:userId", async (req, res) => {

  const cart = await Cart
    .findOne({ userId: req.params.userId })
    .populate("items.productId");

  res.json(cart);
});

module.exports = router;
