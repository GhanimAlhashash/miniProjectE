const { model, Schema } = require("mongoose");
const { type } = require("os");

const BookSchema = new Schema({
  title: { type: String, required: true },
  auther: { type: String, required: true },

  price: { type: Number, default: 5 },

  image: { type: String, default: "https://i.imgur.com/Kb1Tb1u.jpeg" },
});

module.exports = model("Book", BookSchema);
