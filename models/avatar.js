const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AvatarSchema = new Schema({ 
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

const AvatarImage = mongoose.model("AvatarImage", AvatarSchema);

module.exports = AvatarImage;