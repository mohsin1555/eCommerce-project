const KidsProduct = require("../model/kidsProducts");
const kcreate = (req, res) => {
  data = KidsProduct(req.body);
  data
    .save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
const kshow = (req, res) => {
  KidsProduct.find((err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
};
module.exports = { kcreate, kshow };
