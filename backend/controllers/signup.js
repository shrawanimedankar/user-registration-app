const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.json({
      message: "User Registered Successfully",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
