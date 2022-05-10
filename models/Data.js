import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
  "name": String,
}
);

const DataModel = mongoose.model('titanic', DataSchema);

module.exports = DataModel;

