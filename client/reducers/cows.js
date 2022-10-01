import * as types from '../constants/actionTypes';

const initialState = {
	milk: 0,
	totalCows: 0,
	currentMultiplier: 1
}

const cowsReducers = ( state = initialState, action ) => {

	switch (action.type) {
		case types.ADD_COW: {
			//purchase new cow
		}
		case types.CALCULATE: {
			//should be invoked every second
			//changes Milk count
		}
		case types.CLICK: {
			//handles click on cow to add one milk
		}
		default: {
			return state;
		}
	}
};

export default cowsReducers;