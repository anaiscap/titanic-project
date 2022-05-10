import Passenger from '../Models/Passenger';

export default (req, res) => {
  if (req.params.sex) {
    Passenger.find({ Sex: { $eq: req.params.sex }}).exec((err ,doc) => {
      res.render('home/secret',{passengers: doc});
    });

    return;
  }
  res.render('home/secret',{passengers: null}); 

} 
