import { Db } from 'mongodb';
import Passenger from '../Models/Passenger';


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
  Count
}
