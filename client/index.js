//React starts here
import React from 'react';
import { render } from 'react-dom';
import store from './store.js';
import App from './components/App';


//import a stylesheet here if applicable
console.log('inside index.js');
//doc renderer here

render( 
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);