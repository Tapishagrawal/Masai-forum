const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(400).send({ msg: `Token required` });
  }

  try {
    jwt.verify(token, process.env.LOGIN_JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(400).json({ msg: "Invalid Token" });
      } else if (decoded) {
        req.body.user=decoded
        next();
      }
    });
  } catch (err) {
    res.status(400).send({ msg: err });
  }
};

module.exports = { auth };
