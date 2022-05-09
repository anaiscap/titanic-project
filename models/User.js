import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserShema = new Schema({
  firstName: {
    String,
    require: true,
  },
  lastName: {
    String,
    require: true,
  },
  email: {
    String,
    require: true,
  },
  password: {
    String,
    require: true,
  },
});

export default UserShema;
