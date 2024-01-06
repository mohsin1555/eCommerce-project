const mongoose = require("mongoose");
const dealModel = mongoose.Schema({
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
module.exports = mongoose.model("Deal", dealModel);
