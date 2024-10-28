const Service = require("../models/service-model");
const services = async (req, res) => {
  try {
    const response = await Service.find();
    console.log({response})
    if (!response) {
      res.status(400).json({ msg: "No service found" });
    }

    res.status(200).json({ msg: response});
  } catch (error) {
    console.log(`service:${error}`);
  }
};
module.exports = services;
