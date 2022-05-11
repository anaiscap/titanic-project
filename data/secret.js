import Passenger from '../Models/Passenger';

export default (req, res) => {
  console.log(req.query)
  if (req.params.term) {
    const { k } = req.query;
    let term = req.params.term;
    /*if( isNaN( parseInt( term ) ) === false ) term = parseInt(term) ;*/
    console.log ({[k]:  term }) 
    Passenger.find({ [k]: term }).exec((err ,doc) => {
      //console.log(doc);
      res.render('home/secret',{passengers: doc});
    });

    return;
  }

  res.render('home/secret',{passengers: null}); 

} 
