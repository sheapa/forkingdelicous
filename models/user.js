const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: Schema.Types.String,
  email: Schema.Types.String,
  recipes: { type: Schema.Types.ObjectId, ref: "Recipe" },
  avatar: Schema.Types.String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
