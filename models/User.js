import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
  "username": String,
  "password": String,
}
);

const UserModel = mongoose.model('myusers', UserSchema);

module.exports = UserModel;

