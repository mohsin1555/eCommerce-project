const mongoose = require("mongoose");
const proSchema = mongoose.Schema({
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
module.exports = mongoose.model("product", proSchema);
