const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      pattern: "^[A-Z][a-z]*$",
    },
    email: {
      type: "string",
      pattern: ".+@.+..+",
    },
    password: {
      type: "string",
    },
  },
  required: ["name", "email", "password"],
};
const validate = ajv.compile(schema);

module.exports = validate;
