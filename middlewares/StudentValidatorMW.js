const validator = require("../util/studentValidator");

module.exports = (req, res, next) => {
  let valid = validator(req.body);
  if (valid) {
    req.valid = 1;
    next();
  } else res.status(403).send("forbidden command !!!!!!!!!!!!!!!!!!!!!!!!");
};
