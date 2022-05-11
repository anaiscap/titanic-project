import Passenger from '../Models/Passenger';

export default (req, res)=> {

        Passenger.find({ Survived: { $eq: 1 }})
            .then((doc)=> {
                
            res.render('home/secret',{passengers: doc});
            })
    
}