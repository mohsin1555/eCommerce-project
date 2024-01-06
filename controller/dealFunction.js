const model = require("../model/deal");
const Dcreate = (req, res) => {
  const data = model(req.body);
  data
    .save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
const Dshow = (req, res) => {
  model.find((err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
};
module.exports = { Dcreate, Dshow };
