const express = require("express");
const app = express();
const path = require("path");
const Ajv = require("ajv");
const port = process.env.PORT || 3000;

const schema = {
  type: "object", // Corrected typo from "opject" to "object"
  properties: {
    name: {
      type: "string",
      pattern: "^[A-Z][a-z]*$",
    },
    dep: {
      type: "string",
      enum: ["IS", "CS", "SC", "Sy"],
      maxLength: 2,
      minLength: 2,
    },
  },
  required: ["name", "dep"],
  maxProperties: 2,
  minProperties: 2,
};

const ajv = new Ajv();
let validator = ajv.compile(schema);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  express.static(path.join(__dirname, "My-Github/Football-leagues/public"))
);

const students = [
  { name: "Mohamed", dep: "SC", id: 1 },
  { name: "Ahmed", dep: "SC", id: 2 },
  { name: "Mazen", dep: "SC", id: 3 },
  { name: "Fawzy", dep: "SC", id: 4 },
  { name: "Fathy", dep: "IS", id: 5 },
  { name: "Yasser", dep: "SC", id: 7 },
  { name: "Nillo", dep: "CS", id: 8 },
  { name: "Turkey", dep: "CS", id: 9 },
  { name: "Zien", dep: "IS", id: 10 },
];
// Request main // using middleware pipeline
app.get(
  "/",
  (req, res, next) => {
    console.log("Stage #1 in middleware");
    next();
  },
  (req, res, next) => {
    console.log("Stage #2 in middleware");
    next();
  },
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "/My-Github/Football-leagues/public/football.html")
    );
  }
);

//

//Request welcome
app.get("/welcome.html", (req, res) => {
  console.log(req.query);
  res.sendFile(path.join(__dirname, "welcome.html"));
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

//JSON opject
//Request all students
app.get("/api/students", (req, res) => {
  res.json(students);
});

//Request student by ID
app.get("/api/students/:id", (req, res) => {
  console.log("requist resieved....");
  let id = req.params.id;
  const std = students.find((val, idx, arr) => {
    return val.id == id;
  });
  if (std) res.json(std);
  else res.send("NOT Found !");
});

//create new student
app.post("/api/students", (req, res) => {
  let valid = validator(req.body);
  if (valid) {
    req.body.id = students.length + 1;
    students.push(req.body);
    res.json(req.body);
  } else {
    res.status(403).send("forbidden command");
  }
});

//delete student
app.delete("/api/students/:id", (req, res) => {
  let idx = students.findIndex((val) => {
    return val.id == req.params.id;
  });
  if (idx != -1) {
    res.send(`Student ${students[idx].name} is deleted`);
    students.splice(idx, 1);
  } else {
    res.send("Student does NOT found");
  }
});

//Update student data
app.put("/api/students/:id", (req, res) => {
  let idx = students.findIndex((val) => {
    return val.id == req.params.id;
  });
  if (idx != -1) {
    for (i in req.body) {
      students[idx][i] = req.body[i];
    }
    res.send("Student data updated successfully");
    res.json(students[idx]);
  } else {
    res.send("Student NOT found");
  }
});

app.listen(port, () => {
  console.log(`Lisitening to port ${port}`);
});
