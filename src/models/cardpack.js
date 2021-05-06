const mongoose = require("../db");
const cardSideScehma = new mongoose.Schema({
  text: {
    desc: "text for card side",
    trim: true,
    type: String,
    required: false,
  },
  image: {
    desc: "image for card side",
    trim: true,
    type: String,
    required: false,
  },
});
const cardSchema = new mongoose.Schema({
  front: {
    desc: "the front of the card",
    type: cardSideScehma,
    required: true,
  },
  back: {
    desc: "the front of the card",
    type: cardSideScehma,
    required: true,
  }
}, {
  strict: true,
});

const ID_LENGTH = 5;

const cardpackSchema = new mongoose.Schema({
  id: {
    desc: "card pack id",
    trim: true,
    type: String,
    required: true,
    index: true,
    unique: true,
    validate: [(id) => {
      return id.length === ID_LENGTH
    }, `length of id should be ${ID_LENGTH}`]
  },
  title: {
    desc: "card pack title",
    trim: true,
    type: String,
    required: true,
  },
  cards: {
    desc: "list of cards",
    type: [cardSchema],
    required: true,
  },
}, {
  strict: true,
  versionKey: false,
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  },
});

module.exports = {
  Cardpack: mongoose.model("Cardpack", cardpackSchema),
  ID_LENGTH: ID_LENGTH
};