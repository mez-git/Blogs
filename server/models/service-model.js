const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    title: { type: String },
    image: { type: String },
    category: { type: [String] },
    description: { type: String },
  },
  { collection: "services" }
);

const Service = new model("Service", blogSchema);

module.exports = Service;
