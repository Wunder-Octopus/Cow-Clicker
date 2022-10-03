const User = require('../models/userModel');
const userController = {};
const SALT_WORK_FACTOR = 6;
const bcrypt = require('bcrypt');


//create user
userController.createUser = (req, res, next) => {
    console.log("creating User...");
    // We have User and Password in req under params (queries?)
    // let username = 'Lisa';
    // let password = 'hellothere';

    // Access username and password
    let { username, password } = req.body;

    console.log('req.body:', req.body);
    console.log('username:', username, 'password:', password);

    let salt = bcrypt.genSaltSync(SALT_WORK_FACTOR)
    password = bcrypt.hashSync(password, salt);

    User.create({username: username, password: password}, (err, result) => {

        // Username already exists
        if(err && err.code === 11000) {
            next({
                message: "Username already exists"
            });
            return;
        }
        // Else invalid credentials error
        else if(err) {
            next({
                message: "Invalid username or password"
            });
            return;
        }
        res.locals.result = result;
        next();
        return;
    })
};

//login and authentication
userController.verifyUser = (req, res, next) => {
    // Deconstruct username and password from req.body
    const { username , password } = req.body; 
    // console.log('req.body:', req.body);
    // console.log('username:', username, 'password:', password);
    // Query database (User) by invoking find, checking for username and password
    User.findOne({username : username}, (err, user) => {
        // If there is a result, then it's a valid username : password
       // Else no result, then respond with an errorObj: "Invalid username or password"
       console.log('verifyUser result:', user);

       if (user) {
        res.locals.result = { username };
        bcrypt.compareSync(password, user.password) ? next() : next({message : 'Passwords don\'t match'});
        return;
       } else {
        next ({
            message: "Invalid username or password"
        })
       }
    })
}


module.exports = userController;