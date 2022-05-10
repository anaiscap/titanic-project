import UserModel from '../Models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const register = (req, res, next) => {
    
    const {username, password} = req.body

    const User = new UserModel (
        {
            "username": username,
            "password": password
        }
    )
    User.save()
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

    UserModel.findOne({
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
        return res.redirect('/secret');
    })
}


module.exports = {
    register, login
}