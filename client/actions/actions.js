import * as types from '../constants/actionTypes';

//change puchase to whatever
export const AddCowActionCreator = () => ({
	type: types.ADD_COW,
});

export const clickCowActionCreator = () => ({
	type: types.CLICK,
});

export const calculateActionCreator = () => ({
	type: types.CALCULATE,
});

export const userActionCreator = (userObj) => ({
	type: types.USER,
	payload: {username: userObj.username, password: userObj.password}
});
