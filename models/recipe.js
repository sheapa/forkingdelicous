// import mongoolia from 'mongoolia';
const mongoolia = require('mongoolia').default;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: {type: Schema.Types.String, algoliaIndex: true},
  // title: [Schema.Types.String],
  description: {type: Schema.Types.String, algoliaIndex: true},
  instruction: [{type: Schema.Types.String, algoliaIndex: true}],
  ingredients: [
    {
      name: {type: Schema.Types.String, algoliaIndex: true},
      quantity: {type: Schema.Types.Number, algoliaIndex: true},
      unit: {type: Schema.Types.String, algoliaIndex: true},
    },
  ],
  tips: {type: Schema.Types.String, algoliaIndex: true},
  yeild: {type: Schema.Types.String, algoliaIndex: true},
  categories: [{type: Schema.Types.String, algoliaIndex: true}],
  feedback: [{type: Schema.Types.String, algoliaIndex: true}],
  activeTime: {type: Schema.Types.String, algoliaIndex: true},
  inActiveTime: {type: Schema.Types.String, algoliaIndex: true},
  addons: { type: Schema.Types.ObjectId, ref: "Recipe", algoliaIndex: true },
  forkedFrom: { type: Schema.Types.ObjectId, ref: "User", algoliaIndex: true },
  images: [{type: Schema.Types.String, algoliaIndex: true}],
  pubDate: [
    {type: Schema.Types.String, algoliaIndex: true},
    {default: Date.now, algoliaIndex: true}
  ],
  likes: {type: Schema.Types.Number, algoliaIndex: true},
  saves: {type: Schema.Types.Number, algoliaIndex: true},
  forks: {type: Schema.Types.Number, algoliaIndex: true},
  author: { type: Schema.Types.ObjectId, ref: "User", algoliaIndex: true },
});

RecipeSchema.plugin(mongoolia, {
  appId: 'ZCHNRWDF6B',
  apiKey: 'af3f80f79bfd2b7d0e7832aba6f0a582',
  indexName: 'recipeDB'
})

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
