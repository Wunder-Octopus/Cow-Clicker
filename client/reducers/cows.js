import * as types from '../constants/actionTypes';

const initialState = {
	milk: 0,
	totalCows: 0,
	currentMultiplier: 1
};

const cowsReducers = ( state = initialState, action ) => {

	switch (action.type) {
		case types.ADD_COW: {
			//purchase new cow
			const newCowCount = state.totalCows + 1;
			return {
				...state,
				totalCows: newCowCount,
			};
		};
		case types.CALCULATE: { //changes Milk count
			//should be invoked every second, invocation should happen inside game component
			
			const currMilk = state.milk;
			//add upgrades into calculation here: For example
				// const milkFromCows = state.totalCows * cowMultiplier;
				// const milkFromFields = state.totalFields * fieldMultiplier;
				// currMilk = currMilk + (milkFromCows + milkFromFields);
			
			//temporary simple version
			currMilk = currMilk + (state.totalCows * state.currentMultiplier);

			return {
				...state,
				milk: currMilk,
			};
		};
		case types.CLICK: {
			//handles click on cow to add one milk
			const currMilk = state.milk++;
			return {
				...state,
				milk: currMilk,
			};
		};
		// case types.USER: { //Does user login need to be done through state?
		// should signup/login happen purely as post requests in the login component?
		// should store receive a simple boolean for login success?
		// 	//payload is a user object with username and password
		// }
		default: {
			return state;
		};
	};
};

export default cowsReducers;