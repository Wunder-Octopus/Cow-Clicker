const express = require('express');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const router = express.Router();

//const cookieController = require('../controllers/cookieController');
//const sessionController = require('../controllers/sessionController');

router.get('/', (req, res) => {
	console.log('/ route in api.js')
	res.status(400).json('Routed to /api/, please choose a further route')
});

//add sessionController and cookieController middleware
router.post('/signup', userController.createUser, (req, res, next) => {
	console.log('signp route, in api.js')
	return res.status(201).json(`User: ${res.locals.result.username} successfully created.`)
});

//add sessionController and cookieController middleware
router.post('/login', userController.verifyUser, userController.loadGame, (req, res, next) => {
	// res.set(body, {username: res.locals.username, message: `Welcome back ${res.locals.username}`});
	// res.cookie('user', res.locals.username);
	return res.status(200).json(res.locals.characterData);
});

router.get('/savegame/:username', userController.loadGame, (req, res, next) => {
	console.log('successful load');
	return res.status(200).json(res.locals.characterData);
})

router.post('/savegame', userController.saveGame, (req, res, next) => {
	// res.set(body, {username: res.locals.username, message: `Welcome back ${res.locals.username}`});
	// res.cookie('user', res.locals.username);
	console.log('successful save');
	return res.status(200).json(`Saved data!`);
});


module.exports = router;