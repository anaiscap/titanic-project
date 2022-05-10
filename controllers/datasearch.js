import Passenger from '../Models/Passenger';

const findMale = (req, res, next) => {
    console.log('ca fonctionne');
    const result  = Passenger.find({ "Sex": male});
    console.log(result);
    return res.redirect('/secret');
   
} 

module.exports = {
    findMale
}