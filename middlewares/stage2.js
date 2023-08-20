module.exports = (req, res, next) => {
    console.log("Stage #2 in middleware");
    next();
  }