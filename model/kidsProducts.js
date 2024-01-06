const mongoose = require("mongoose");
const kidsModel = mongoose.Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: String,
  },
});
module.exports = mongoose.model("Kids", kidsModel);
