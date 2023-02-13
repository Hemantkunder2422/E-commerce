const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//Register User

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    const hshpassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    );
    const ogpassword = hshpassword.toString(CryptoJS.enc.Utf8);
    const { password, ...others } = user._doc;
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );

    if (ogpassword !== req.body.password) {
      res.status(401).json("Wrong Creds");
    } else {
      res.status(200).json({ ...others, accessToken });
    }
  } else {
    res.status(401).json("No User Found");
  }
});

module.exports = router;
