const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSaveSchema = new Schema({
	username: { type: String, required: true, unique: true },
	milk: { type: Number, require: true },
	totalCows: { type: Number, require: true },
	totalFields: { type: Number, require: true },
	currentMultiplier: { type: Number, require: true },
	cowCost: { type: Number, require: true },
	fieldCost: { type: Number, require: true },
});

//module.exports = mongoose.model('gameSave', gameSaveSchema);
