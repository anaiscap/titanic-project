import DataModel from '../Models/Data';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
//import User from './Models/User';
import mongoose from 'mongoose';

dotenv.config();
const { APP_LOCALHOST : hostname, APP_PORT: port, APP_DSN: dsn } = process.env;

mongoose.connect(dsn, {
    "useNewUrlParser": true, 
    "useUnifiedTopology": true});
  
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("connecté à Mongoose")
  });
const data = () => {
    console.log('ca fonctionne')
    
  var dbo = db.db("test");
  dbo.collection("titanic").findOne({}, function(err, result) {
    
    console.log(result.name);
    db.close();
  });
} 

module.exports = {
    data
}