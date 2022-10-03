const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
	cookieId: {type: String, require: true, unique: true },
	createdAt: {type: date, expires: 30, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);
