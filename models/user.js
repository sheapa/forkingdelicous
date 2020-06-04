const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: Schema.Types.String,
  lastName: Schema.Types.String,
  email: Schema.Types.String,
  username: Schema.Types.String,
  password: Schema.Types.String,
  recipes: { type: Schema.Types.ObjectId, ref: "Recipe" }, // not passing seeder data for "recipes"... may need to seed both.
  avatar: Schema.Types.String
});

// Had to pass through encryption on way in. Would not work otherwise.
//Hash password with bcrypt.
UserSchema.pre("save", function(next) {
  const hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
  next();
})


//Check password using instance method.
UserSchema.methods.checkPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("User", UserSchema);

module.exports = User;
