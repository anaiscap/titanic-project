import Myuser from '../Models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

const login = (req, res, next) => {
    
    let username = req.body.username;
    let password = req.body.password;

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

        console.log(username);
        
        return res.redirect('/secret');
        
    })
}


module.exports = {
    register, login
}