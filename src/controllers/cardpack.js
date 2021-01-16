const Cardpack = require("../models/cardpack");


exports.create = (req, res) => {

  const data = req.body
  if (!data.title || !data.cards) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }

  const cardpack = new Cardpack({
    title: data.title,
    cards: data.cards,
  });
  cardpack
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
}

exports.findAll = (req, res) => {
  Cardpack.find()
    .sort({
      title: -1
    })
    .then((cardpacks) => {
      res.status(200).send(cardpacks);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
}

exports.findOne = (req, res) => {
  Cardpack.findById(req.params.id)
    .then((Cardpack) => {
      if (!Cardpack) {
        return res.status(404).send({
          message: "Cardpack not found with id " + req.params.id,
        });
      }
      res.status(200).send(Cardpack);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error retrieving Cardpack with id " + req.params.id,
      });
    });
};

exports.update = (req, res) => {
  const data = req.body
  if (!data.title || !data.cards) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }
  Cardpack.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then((Cardpack) => {
      if (!Cardpack) {
        return res.status(404).send({
          message: "no Cardpack found",
        });
      }
      res.status(200).send(Cardpack);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "error while updating the post",
      });
    });
};

exports.delete = (req, res) => {
  Cardpack.findByIdAndRemove(req.params.id)
    .then((Cardpack) => {
      if (!Cardpack) {
        return res.status(404).send({
          message: "Cardpack not found",
        });
      }
      res.send({
        message: "Cardpack deleted successfully!"
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Could not delete Cardpack",
      });
    });
};