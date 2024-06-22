const mongoose = require("mongoose");

// Schema
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "category title is required"],
    },
    imageUrl: {
      type: String,
      default:
        "https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("category", categorySchema);
