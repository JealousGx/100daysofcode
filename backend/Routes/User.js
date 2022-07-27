const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../Models/User");
const verify = require("../Middleware/verifyToken");

// Route to get all users.
router.get("/", verify, async (req, res) => {
  const query = req.query.new;
  if (req.user.user.isAdmin) {
    try {
      const users = query ? await User.find().limit(10) : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Insufficient privileges.");
  }
});

// Route to get a user.
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    const { password, ...userInfo } = user._doc;
    res.status(200).json(userInfo);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// Route to update a user.
router.put("/:id", verify, async (req, res) => {
  const { id: _id } = req.params;
  let { email, password } = req.body;

  // Check if the params id matches with the user id of the email entered user.
  const user = await User.findOne({ email }); // Getting the user from the database.
  if (!user) {
    return res.status(400).json({ msg: "User does not exist" }); // If the user does not exist, return an error.
  }

  if (req.params.id === req.user.user._id || req.user.user.isAdmin) {
    if (password) {
      const salt = await bcrypt.genSalt(10); // Generating a salt for the password (bcrypt).
      req.body.password = await bcrypt.hash(password, salt); // Hashing the password (bcrypt).
    }

    try {
      const updatedUser = await User.findOneAndUpdate(
        { email },
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  } else {
    return res
      .status(403)
      .json({ msg: "You are not authorized to update this user..." }); // If the user is not authorized, return an error.
  }
});

// Route to delete a user
router.delete("/:id", verify, async (req, res) => {
  const { id: _id } = req.params;
  const user = await User.findOne({ _id }); // Getting the user from the database.
  if (!user) {
    return res.status(400).json({ msg: "User does not exist" }); // If the user does not exist, return an error.
  }

  if (req.user.user._id === req.params.id || req.user.user.isAdmin) {
    try {
      const deletedUser = await User.findOneAndDelete({ _id });
      res.status(200).json(deletedUser);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  } else {
    return res
      .status(403)
      .json({ msg: "You are not authorized to delete this user." }); // If the user is not authorized, return an error.
  }
});

module.exports = router;
