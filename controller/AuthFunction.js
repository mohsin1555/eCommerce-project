const authModel = require("../model/Auth");
const Signup = async (req, res) => {
  const data = await authModel(req.body);
  const RecordMatch = await authModel.findOne({
    email: req.body.email,
  });
  if (RecordMatch) {
    res.status(500).send({ message: "Email is already exist", RecordMatch });
  } else {
    data.save();
    res.status(200).send({ message: "Account Created Successfully", data });
  }
};
const Signin = async (req, res) => {
  const Match = await authModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (Match) {
    res.status(200).send({ message: "Login Successfully", Match });
  } else {
    res.status(500).send({ message: "Invalid Email/Password" });
  }
};
module.exports = { Signup, Signin };
