module.exports=(req, res, next) => {
    console.log("Stage #1 in middleware");
    next();
  };