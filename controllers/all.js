import Passenger from '../Models/Passenger';

export default (req, res)=> {
    const val = req.session.login;
    if (!val) {
        res.render('home/login'); 
    } else {

Passenger.find({})
        .then((doc)=> {

            res.render('home/secret',{passengers: doc, user: val});
        })
    }
}