const express = require("express");
const app = express();
const path = require("path");

const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const ejs = require("ejs");
const studentsRouter = require("./routes/Students");
const stage1 = require("./middlewares/stage1");
const stage2 = require("./middlewares/stage2");
const port = process.env.PORT || 3000;


//3rd party midlewere
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/students", studentsRouter);
app.use(
  express.static(
    "C:/Users/lenovo/Desktop/NodeJS/My-Github/Football-leagues/public"
  )
);
// Request main // using middleware pipeline
app.use(stage1);
app.use(stage2);
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../Football-leagues/public/football.html")
  );
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
