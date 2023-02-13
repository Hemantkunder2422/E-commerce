const router = require("express").Router();
const {
  verifyTokenAuthorization,
  verifyTokenandAdmin,
} = require("../VerifyToken");
const Cart = require("../models/Cart");

// Create
router.post("/", verifyTokenAuthorization, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Update cart

router.put("/:id", verifyTokenandAdmin, async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne(req.params.id);
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", verifyTokenAuthorization, async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
