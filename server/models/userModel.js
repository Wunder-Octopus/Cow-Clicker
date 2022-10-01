const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = "";

mongoose.connect(MONGO_URI, {
	dbName: 'REPLACE THIS WITH REAL NAME',
})
	.then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


	//EXPAND ON SCHEMA IF NECESSARY, IE, TO STORE GAME STATE
const userSchema = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true}
});

//If more models are made, swap to this, export object with models
// const User = mongoose.model('user', userSchema); 

module.exports = mongoose.model('User', userSchema);