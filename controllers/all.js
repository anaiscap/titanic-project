import Passenger from '../Models/Passenger';

export default (req, res)=> {
Passenger.find({})
        .then((doc)=> {

            res.render('home/secret',{passengers: doc});
        })
}