const express = require("express");
const mongoose = require("mongoose");

const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/User");

const PORT = process.env.PORT || 5000;

const app = express();

// dotenv configure
require("dotenv").config();

// Connect the database
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log("✅ MongoDB is sending Gifts for successful connection! 🎁")
  )
  .catch((err) => console.log(`❌ MongoDB is sending errors:\n${err}`));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server is shooting rockets at: https://localhost:${PORT}`);
});
