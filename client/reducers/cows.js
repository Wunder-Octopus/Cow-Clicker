import * as types from '../constants/actionTypes';

const initialState = {
	devMode: false,
	milk: 0,
	totalCows: 0,
	totalFields: 0,
	currentMultiplier: 1,
	loggedIn: false,
	username: '',
	cowCost: 10,
	fieldCost: 100,
};

const cowsReducers = ( state = initialState, action ) => {

	switch (action.type) {
		// case types.TOGGLE_DEV: {
		// 	let dev_Mode = state.devMode;
		// 	return {
		// 		...state,
		// 		devMode: !dev_Mode
		// 	}
		// }
		case types.ADD_COW: {
			if (state.milk < state.cowCost) return {...state};
			//purchase new cow
			const newCowCount = state.totalCows + 1;
			const newCowCost = Math.ceil((state.cowCost * 1.3));
			const newMilkCount = state.milk - state.cowCost;
			console.log('newMilkCount, newCowCount', newMilkCount, newCowCount);
			return {
				...state,
				milk: newMilkCount,
				totalCows: newCowCount,
				cowCost: newCowCost,
			};
		};
		case types.ADD_FIELD: {
			if (state.milk < state.fieldCost) return {...state};
			
			const newFieldCount = state.totalFields + 1;
			const newFieldCost = Math.ceil((state.fieldCost * 1.3));
			const newMilkCount = state.milk - state.fieldCost;
			return {
				...state,
				totalFields: newFieldCount,
				fieldCost: newFieldCost, 
				milk: newMilkCount,
			}
		}
		case types.CALCULATE: { //changes Milk count
			//should be invoked every second, invocation should happen inside shop component 
			//(whereever stats are being rendered)
			

			//add upgrades into calculation here: For example
				// const milkFromCows = state.totalCows * cowMultiplier;
				// const milkFromFields = state.totalFields * fieldMultiplier;
				// currMilk = currMilk + (milkFromCows + milkFromFields);
			//temporary simple version
			const currMilkFromCows = (state.totalCows * state.currentMultiplier);
			const currMilkFromFields =  (state.totalFields * 5) * state.currentMultiplier;
			const currMilk = state.milk + currMilkFromCows + currMilkFromFields;

			return {
				...state,
				milk: currMilk,
			};
		};
		case types.CLICK: {
			// console.log("INSTATE", state)
			//handles click on cow to add one milk
			let currMilk;
			console.log("DEV MODE STATE", state.devMode)
			// if (state.devMode === false) 
			currMilk = state.milk += 1;
			// else currMilk = state.milk += 10000;
			return {
				...state,
				milk: currMilk,
			};
		};
		case types.USER: { //Does user login need to be done through state?
		// should signup/login happen purely as post requests in the login component?
		// should store receive a simple boolean for login success?
			//payload is a user object with username and password
			const currUser = action.payload.username;
			return {
				...state,
				username: currUser,
			}
		}
		case types.LOGGED_IN: {
			return {
				...state,
				loggedIn: true ? false: true,
			}
		}
		default: {
			return state;
		};
	};
};

export default cowsReducers;