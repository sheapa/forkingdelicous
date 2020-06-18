const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RecipeImageSchema = new Schema({ 
    imageName: {
        type: String,
        default: "none",
        required: true
    },
    imageData: {
        type: String,
        required: true,
    },
});

const RecipeImage = mongoose.model("RecipeImage", RecipeImageSchema);

module.exports = RecipeImage;