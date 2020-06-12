const mongoose = require("mongoose");
const mongoolia = require('mongoolia').default;

const Schema = mongoose.Schema;

const IngredientsSchema = new Schema({ 
  ingredients: {
      
    name: {type: Schema.Types.String, algoliaIndex: true},
      
      quantity: {type: Schema.Types.Number, algoliaIndex: true},
      
      unit: {type: Schema.Types.String, algoliaIndex: true},

      recipe: { type: Schema.Types.ObjectId, ref: "Recipe", algoliaIndex: true }
  },
});

// Spencer, what are the requirements for the "indexName" here?
IngredientsSchema.plugin(mongoolia, {
    appId: 'ZCHNRWDF6B',
    apiKey: 'ee98d1240ef700b8e63342844d760803',
    indexName: 'ingredientsDB'
  });

const Ingredients = mongoose.model("Ingredients", IngredientsSchema);

module.exports = Ingredients;