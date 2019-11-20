/* eslint-disable no-undef */

const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .populate('user')
    .then(users => res.send({ users }))
    .catch(err => res.status(404).send({ message: err.message }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar} = req.body;
  User.create({ name, about, avatar})
    .then(user => res.send({ user }))
    .catch(err => res.status(404).send({ message: err.message }));
};

module.exports.getUser = (req, res) => {
  const {_id} = req.user;
  User.findById(req.params.id)
    .then(user => {
      if(!user) {
        return res.status(404).send({message: 'Такой пользователь не найден'});
      }
      else{
        res.send({ user });
      }
    })
    .catch(err => res.status(404).send({ message: 'юзер не найден' }));

}


