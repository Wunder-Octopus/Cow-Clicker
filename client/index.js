//React starts here
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

//import a stylesheet here if applicable
console.log('inside index.js');
//doc renderer here

render( 
	<App />,
	document.getElementById('root')
);