import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
  "username": String,
  "password": String,
}
);

const Myuser = mongoose.model('Myuser', UserSchema);

module.exports = Myuser;

