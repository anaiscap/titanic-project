import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
  "Name": String,
  "Sex": String,
  "Age": Number,
  "Survived": Number,
  "Pclass": String
}
);

const Passenger = mongoose.model('Passenger', DataSchema);

module.exports = Passenger;

