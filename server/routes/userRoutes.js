const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.get("/:id", async (req,res)=>{

  const user = await User.findById(req.params.id).select("-password");

  res.json(user);
});

module.exports = router;
