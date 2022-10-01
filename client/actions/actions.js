import * as types from '../constants/actionTypes';

//change puchase to whatever
export const addCowActionCreator = () => ({
	type: types.ADD_COW,
});

export const clickCowActionCreator = () => ({
	type: types.CLICK,
});

export const calculateActionCreator = () => ({
	type: types.CALCULATE,
});

export const userActionCreator = (username) => ({
	type: types.USER,
	payload: username,
});

export const loggedInActionCreator = () => ({
	type: types.LOGGED_IN,
});
