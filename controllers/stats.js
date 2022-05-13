import { Db } from 'mongodb';
import Passenger from '../Models/Passenger';

const Search = async (req, res) => {
  console.log('hello');
  const { resName } = req.body;
  const mypassenger = await Passenger.find({ $text: { $search: { name: resName } } });
  
  res.render('home/secret', {thepassenger: mypassenger });
}

const Avg = (req, res) => {
  const val = req.session.login;
  console.log('hello');
  Passenger.aggregate(
    [
      { $group : 
        {"_id" : 
          { 
            "sex" : "$Sex", 
            "pclass" : "$Pclass" 
          }, 
          "avgSurvivors": { $avg: "$Survived" },
          
        }
      },
      {
        $addFields: {
          "roundedAvg": { $round: ['$avgSurvivors', 2] },
        },
      },

    ]).exec((err ,doc) => {
    res.render('data/avg',{datas: doc, user: val});
  });
}



const Count = (req, res) => {
  const val = req.session.login;
  if (!val) {
    res.render('home/login'); 
  } else {
  Passenger.aggregate(
    [
      { $group : 
        {"_id" : 
          { 
            "sex" : "$Sex", 
            "pclass" : "$Pclass", 
            "survived": "$Survived" 
          }, 
          "total" : {$sum:1}
        }
      },
    ]).exec((err ,doc) => {
    res.render('data/stats',{passengers: doc, user: val});
  });
  
  return;
}
}

module.exports = {
  Count, Search, Avg
}
