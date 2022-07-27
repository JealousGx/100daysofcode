const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Function to generate a random number between 0000 to 9999
const generateRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * 10000).toString();
  if (randomNumber < 1000) {
    randomNumber = "0" + randomNumber;
  }
  if (randomNumber < 100) {
    randomNumber = "00" + randomNumber;
  }
  if (randomNumber < 10) {
    randomNumber = "000" + randomNumber;
  }
  return randomNumber;
};

// Route to register a new user.
router.post("/register", async (req, res) => {
  const { username, email, password, dob, isAdmin } = req.body;
  let generatedID = generateRandomNumber(); // Generating an ID for the user.

  // Check if the user already exists with similar ID.
  const userWithSameName = await User.findOne({ username, id: generatedID }); // Getting the username from database.

  if (userWithSameName) {
    generatedID = generateRandomNumber(); // If the username and ID is already taken, generate a new ID.
  }

  const user = await User.findOne({ email }); // Checking if the email is already taken.
  if (user) {
    return res.status(400).json({ msg: "User with this email already exists" }); // If the email is already taken, return an error.
  }
  const salt = await bcrypt.genSalt(10); // Generating a salt for the password (bcrypt).
  const hashedPassword = await bcrypt.hash(password, salt); // Hashing the password (bcrypt).
  const newUser = new User({
    id: generatedID,
    username,
    email,
    password: hashedPassword,
    dateOfBirth: dob,
    isAdmin: isAdmin,
  });
  try {
    const user = await newUser.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// Route to login a user.
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }); // Getting the user from the database.
  if (!user) {
    return res.status(400).json({ msg: "User does not exist" }); // If the user does not exist, return an error.
  }
  const isMatch = await bcrypt.compare(password, user.password); // Comparing the password with the hashed password.
  if (!isMatch) {
    return res.status(400).json({ msg: "Incorrect password" }); // If the password is incorrect, return an error.
  }

  const userID = JSON.stringify(user._id).slice(1, -1); // Convert the object to string and remove ""

  const payload = {
    user: {
      _id: userID,
      id: user.id,
      isAdmin: user.isAdmin,
    },
  };

  const { userPassword, ...userInfo } = user._doc; // Getting the user info without the password.
  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: "5d" },
    (err, token) => {
      if (err) throw err;
      res.json({ token, userInfo }); // If the user exists and the password is correct, return a token and then user info.
    }
  );
});

module.exports = router;
