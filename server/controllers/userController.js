const User = require('../models/userModel');

const userController = {};



//create user
userController.createUser = (req, res, next) => {
    console.log("creating User...");
    // We have User and Password in req under params (queries?)
    // let username = 'Lisa';
    // let password = 'hellothere';

    // Access username and password
    const { username, password } = req.body;

    console.log('req.body:', req.body);
    console.log('username:', username, 'password:', password);

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
    User.findOne({username : username, password : password}, (err, result) => {
        // If there is a result, then it's a valid username : password
       // Else no result, then respond with an errorObj: "Invalid username or password"
       console.log('verifyUser result:', result);
       if (result) {
        res.locals.result = { username, password };
        next();
        return;
       } else {
        next ({
            message: "Invalid username or password"
        })
       }
       
    })

}


module.exports = userController;