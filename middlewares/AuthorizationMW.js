const jwt = require("jsonwebtoken");
const config = require("config");
module.exports = (req, res, next) => {
  // check user role ,Admin or Not

  //get the header token
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access Denied !!");
  try {
    const payload = jwt.verify(token, config.get("jwtsec"));
    //check if user is admin or not
    if (!payload.adminRole) return res.status(401).send("Access Denied !!");
    next();
  } catch (err) {
    return res.status(400).send("Invalid Token !!");
  }
};
