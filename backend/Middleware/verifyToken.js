const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) res.status(403).json("Token is not valid.");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Token not provided.");
  }
};

module.exports = verify;
