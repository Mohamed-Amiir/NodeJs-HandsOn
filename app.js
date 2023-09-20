const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const studentsRouter = require("./routes/Students");
const userRouter = require("./routes/User");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const port = process.env.PORT || 5000;

//3rd party midlewere
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRouter);
app.use("/api/students", studentsRouter);
app.use("/api/login", authRouter);
app.use("/api/admin", adminRouter);

mongoose
  .connect("mongodb://localhost:27017/faculty", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

//REQ body
app.get("/abc", (req, res) => {
  console.log(Buffer.from(req.cookies.username, "base64").toString());
  console.log(req.cookies.userage);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Lisitening to port ${port}`);
});
