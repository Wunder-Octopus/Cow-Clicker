const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.startSession = (req, res, next) => {
	const userSession = new Session();
	//requires userId from user creation/verification, userId = mongoDB _id
	userSession.cookieId = res.locals.id;

	Session.create(userSession)
		.then((data) => {return next()})
		.catch((e) => {return next(e)});
};

sessionController.verifySession = (req, res, next) => {
	//check cookies in response object, verify vs mongodb session id
};

module.exports = sessionController;