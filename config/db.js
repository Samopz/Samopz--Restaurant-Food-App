const mongoose = require("mongoose");
const colors = require("colors");

// function mongodb database connection
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Connected To DB ${mongoose.connection.host} `.bgBlue.yellow);
  } catch (error) {
    console.log("DB Error", error, colors.bgRed);
  }
};

module.exports = connectDb;
