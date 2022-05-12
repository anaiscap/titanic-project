import Passenger from '../Models/Passenger';

export default (req, res) => {
  const val = req.session.login;
 
  if (req.params.term) {
    const { k } = req.query;
    let term = req.params.term;
    /*if( isNaN( parseInt( term ) ) === false ) term = parseInt(term) ;*/
    //console.log ({[k]:  term }) 
    
    Passenger.find({ [k]: term }).exec((err ,doc) => {
      //console.log(doc);
      res.render('home/secret',{passengers: doc});
      console.log("hi",val)
    });
    
    
    return;
  }
  console.log("hello", val)
  res.render('home/secret',{passengers: null}); 

} 
