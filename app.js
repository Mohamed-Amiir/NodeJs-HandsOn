const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const ejs = require("ejs");
const studentsRouter = require("./routes/Students");
const userRouter = require("./routes/User");
const authRouter = require("./routes/auth");
const port = process.env.PORT || 5000;

//3rd party midlewere
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRouter);
app.use("/api/students", studentsRouter);
app.use("/api/login", authRouter);
app.use(
  express.static(
    "C:/Users/lenovo/Desktop/NodeJS/My-Github/Football-leagues/public"
  )
);
// Request main // using middleware pipeline
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../Football-leagues/public/football.html")
  );
});

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

//

//Request welcome
app.post("/welcome.html", (req, res) => {
  console.log(req.body);

  res.cookie("username", Buffer.from(req.body.fnm).toString("base64"));
  res.cookie("userage", 25);
  res.send(`Thanks ${req.body.fnm} ${req.body.lnm} for sending required data`);
  // res.sendFile(path.join(__dirname, "/welcome.html"));
});

//REQ body
app.get("/abc", (req, res) => {
  console.log(Buffer.from(req.cookies.username, "base64").toString());
  console.log(req.cookies.userage);
  res.sendStatus(200);
});

//Request main form
app.get("/main.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/main.html"));
});

//request body
// app.post("/welcome.html", (req, res) => {
//   console.log(req.body);
//   res.send(`welcome welcome ya ${fnm} ${lnm} ya 3m el nas`);
// });

//
app.set("template engine", "ejs");

//JSON opject

app.listen(port, () => {
  console.log(`Lisitening to port ${port}`);
});
