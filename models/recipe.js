const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: Schema.Types.String,
  description: Schema.Types.String,
  instruction: Schema.Types.String,
  ingredients: [
    {
      name: Schema.Types.String,
      quantity: Schema.Types.Number,
      unit: Schema.Types.String,
    },
  ],
  tips: Schema.Types.String,
  yeild: Schema.Types.String,
  categories: [Schema.Types.String],
  feedback: [Schema.Types.String],
  activeTime: Schema.Types.String,
  inActiveTime: Schema.Types.String,
  addons: { type: Schema.Types.ObjectId, ref: "Recipe" },
  forkedFrom: { type: Schema.Types.ObjectId, ref: "User" },
  images: [Schema.Types.String],
  pubDate: {
    type: Schema.Types.Date,
    default: Date.now,
  },
  likes: Schema.Types.Number,
  saves: Schema.Types.Number,
  forks: Schema.Types.Number,
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
