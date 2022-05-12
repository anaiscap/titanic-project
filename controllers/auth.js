import Myuser from '../Models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
/*
const register = (req, res, next) => {
    
    const {username, password} = req.body

    const user = new Myuser (
        {
            "username": username,
            "password": password
        }
    )
    user.save()
    .then((doc) => {
        console.log(doc);
        return res.redirect('/secret');
    })
    .catch((err) => {
        console.log(err);
        res.json({
            "message": 'an error occured'
        })
    })
}
*/
// Our register logic starts here
const register = async (req, res) => {
try {
    // Get user input
    const {username, password} = req.body

    // Validate user input
    if (!(username && password)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await Myuser.findOne({ username });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    const encryptedUserPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await Myuser.create({
      username: username,
     // sanitize
      password: encryptedUserPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, username },
      process.env.TOKEN_KEY,
      {
        expiresIn: "5h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    console.log(user);
    const val = req.session.login;
    return res.redirect('/secret');
    
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};


const login  = async (req, res) => {

try {
  // Get user input
  const { username, password } = req.body;

  // Validate user input
  if (!(username && password)) {
    res.status(400).send("All input is required");
  }
  // Validate if user exist in our database
  const user = await Myuser.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    // Create token
    const token = jwt.sign(
      { user_id: user._id, username },
      process.env.TOKEN_KEY,
      {
        expiresIn: "5h",
      }
    );

    // save user token
    user.token = token;

    // user
    req.session.login = username;
    
    return res.redirect('/secret', );
  }
  return res.status(400).send("Invalid Credentials");
}
  catch (err) {
    console.log(err);
  }
  
// Our login logic ends here
};

/*

const login =  (req, res) => {
  
    let username = req.body.username;
    let password = req.body.password;
    const hash = "YOUR_HASH_STRING"

    Myuser.findOne({
        "username": username,
        "password": password
    }, function(err, User) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        if (!User) {
            return res.redirect('/login');
        }

        req.session.login = username;
        console.log(req.session.login);
        console.log(Myuser.password);
        return res.redirect('/secret');
        
    })
    
}*/
const logout = (req, res) => {
 
  console.log(req.session.login)
  req.session.login = '';
  res.redirect('/');
}
module.exports = {
    register, login, logout
}