import { Db } from 'mongodb';
import Passenger from '../Models/Passenger';


const Count = (req, res) => {
    
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
    res.render('data/stats',{passengers: doc});
  });
  
  return;
}

module.exports = {
  Count
}
