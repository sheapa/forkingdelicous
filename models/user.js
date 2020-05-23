const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserScema = new Schema({
  name: Schema.Types.String,
  email: Schema.Types.String,
  recipes: { type: Schema.Types.ObjectId, ref: "Recipe" },
});

const User = mongoose.model("User", UserScema);

module.exports = User;
