const Ajv = require("ajv");
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
module.exports = ajv.compile(schema);