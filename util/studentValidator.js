const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      pattern: "^[A-Z][a-z]*$",
    },
    dep: {
      type: "string",
      enum: ["IS", "CS", "SC", "Csys"],
    },
  },
  required: ["name", "dep"],
};

const validate = ajv.compile(schema);

module.exports = validate;
