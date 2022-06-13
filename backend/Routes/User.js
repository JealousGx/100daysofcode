const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../Models/User");
const verify = require("../Middleware/verifyToken");

// Route to get a user.
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    const { password, ...userInfo } = user._doc;
    res.json(userInfo);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// Route to update a user.
router.put("/:id", verify, async (req, res) => {
  const { id: _id } = req.params;
  let { email, password } = req.body;

  // Getting the user from the database using _id
  const userWithID = await User.findOne({ _id });

  const user = await User.findOne({ email }); // Getting the user from the database.
  if (!user) {
    return res.status(400).json({ msg: "User does not exist" }); // If the user does not exist, return an error.
  }

  if (userWithID.email === user.email || req.user.isAdmin) {
    if (password) {
      const salt = await bcrypt.genSalt(10); // Generating a salt for the password (bcrypt).
      password = await bcrypt.hash(password, salt); // Hashing the password (bcrypt).
    }

    try {
      const updatedUser = await User.findOneAndUpdate(
        { email },
        {
          $set: req.body,
        },
        { new: true }
      );

      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  } else {
    return res
      .status(400)
      .json({ msg: "You are not authorized to update this user." }); // If the user tries to change the email, return an error.
  }
});

// Route to delete a user
router.delete("/:id", verify, async (req, res) => {
  const { id: _id } = req.params;
  const user = await User.findOne({ _id }); // Getting the user from the database.
  if (!user) {
    return res.status(400).json({ msg: "User does not exist" }); // If the user does not exist, return an error.
  }

  if (req.user.isAdmin || req.user.email === user.email) {
    try {
      const deletedUser = await User.findOneAndDelete({ _id });
      res.json(deletedUser);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  } else {
    return res
      .status(400)
      .json({ msg: "You are not authorized to update this user." }); // If the user tries to change the email, return an error.
  }
});

module.exports = router;
