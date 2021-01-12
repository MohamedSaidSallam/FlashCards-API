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
const cardpackSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Cardpack", cardpackSchema);