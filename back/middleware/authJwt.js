const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");


verifyToken = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(req.cookies.jwt);
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({  
        message: "Unauthorized!"
      });
    }
    req.id = decoded.id;
    next();
  });
};

const authJwt = {
  verifyToken: verifyToken,
};

module.exports = authJwt;