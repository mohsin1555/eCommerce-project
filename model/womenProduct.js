const mongoose = require("mongoose");
const womenModel = mongoose.Schema({
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
module.exports = mongoose.model("Women", womenModel);
