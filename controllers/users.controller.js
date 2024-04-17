const User = require('../models/user.model')

module.exports.list = (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch(console.error);
};

module.exports.detail = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if(user){
        res.json(user);
      } else {
        res.status(404).json({ message: "user not found" });
      }
    })
    .catch(console.error);
};

module.exports.create = (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.update = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // Devuelva el objeto nuevo
    runValidators: true, // ejecute validaciones
  })
  .then((user) => {
    if(user){
      res.json(user);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  })
  .catch((err) => {
    res.status(400).json(err);
  });
};

module.exports.delete = (req, res) => {
  User.findByIdAndDelete(req.params.id)
  .then((user) => {
    res.status(204).send();
  })
  .catch((err) => {
    res.status(400).json(err);
  });
};