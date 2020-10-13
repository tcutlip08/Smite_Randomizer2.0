const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, unique: true },
  sub: { type: String, unique: true },
  pool: { class: { type: String }, gods: [{ type: String }] },
  updated: { type: String, default: Date(Date.now()) },
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

// Export the Article model
module.exports = User;
