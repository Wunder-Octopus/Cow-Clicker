const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', (req, res) => {
	console.log('/ route in api.js')
	res.status(400).json('Routed to /api/, please choose a further route')
});

router.post('/signup', userController.createUser, (req, res, next) => {
	console.log('signp route, in api.js')
	return res.status(201).json(`User: ${res.locals.result.username} successfully created.`)
});

router.post('/login', userController.verifyUser, (req, res, next) => {
	// res.set(body, {username: res.locals.username, message: `Welcome back ${res.locals.username}`});
	// res.cookie('user', res.locals.username);
	return res.status(200).json(`Welcome back ${res.locals.result.username}`);
});


module.exports = router;