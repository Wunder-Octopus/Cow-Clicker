const cookieController = {};

//SSID = service set identifier 
cookieController.setSSIDCookie = (req, res, next) => {
	//receives userID from login/verification
	//adds cookie to response
	res.cookie('ssid', res.locals.userID, {httpOnly: true });

	return next();

}
module.exports = cookieController;