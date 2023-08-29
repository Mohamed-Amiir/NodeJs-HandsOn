//1- require mongoose
const mongoose = require("mongoose");
//2- connect to db
//this step is setted in the entry point of the project -> app.js

//3- create schema
const stdSchema = new mongoose.Schema({
  name: String,
  dep: {
    type: String,
    required: true,
    enum: ["SC", "CS", "IS", "Csys"],
  },
  id: {
    type: Number,
    required: true,
    unique: true,
    min: 30,
    max: 2000,
  },
});
stdSchema.index({ id: 1 }); // Creating an index on the 'id' field
//4- create model
const STUDENT = mongoose.model("students", stdSchema);
// CRUD operations

module.exports = STUDENT;
