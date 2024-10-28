const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
//mongoose.connect(URI)

const connectDb = async () => {
  try {
    console.log({ URI });
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.log("database connection failed", error);
    process.exit(0);
  }
};

module.exports = connectDb;
