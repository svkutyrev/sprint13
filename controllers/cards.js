
const Card = require('../models/card');


module.exports.createCard = (req, res) => {

  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then(card => res.send({ card }))
    .catch(err => res.status(404).send({ message: err.message }))
};

module.exports.getCards = (req, res) => {
  Card.find({})
  .populate('card')
  .then(cards => res.send({ cards }))
  .catch(err => res.status(404).send({ message: err.message }));

};

module.exports.deleteCard = (req, res ) => {
  Card.findByIdAndRemove(req.params.cardId)
  .then(card => {
    if (!card){
      res.status(404).send({ message: 'Карточка не найдена' })
    }
    else{
      res.send({ data: card })
    }
  })
  .catch(err => res.status(404).send({ message: err.message }));
};

