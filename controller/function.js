//Men Products Function
const model = require("../model/product");
const Create = (req, res) => {
  data = model(req.body);
  data
    .save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
const Show = (req, res) => {
  model.find((err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
};
//Women Product Function
const WomenModel = require("../model/womenProduct");
const wCreate = (req, res) => {
  data = WomenModel(req.body);
  data
    .save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
const wShow = (req, res) => {
  WomenModel.find((err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
};

module.exports = { Create, Show, wCreate, wShow };
