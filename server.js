console.clear()
console.log(`*****************`)
import express from "express";
import route from "./routes/routes";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import session from 'express-session';
//import User from './Models/User';
import mongoose from 'mongoose';

dotenv.config();
const { APP_LOCALHOST : hostname, APP_PORT: port, APP_SECRET: secret, APP_DSN: dsn } = process.env;

const app = express();

app.use(express.static(__dirname + "/public"));

app.set('view engine', 'ejs'); 

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session(
  {
      name: 'nomDuCookie',
      secret: secret,
      resave: true,
      saveUninitialized: true,
      cookie: {maxAge: 86400000}
  }
))


app.use('/', route);


mongoose.connect(dsn, {
  "useNewUrlParser": true, 
  "useUnifiedTopology": true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connecté à Mongoose")
});

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});
