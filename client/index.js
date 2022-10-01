//React starts here
import React from 'react';
<<<<<<< HEAD
import * as ReactDOM from 'react-dom';
=======
import { render } from 'react-dom';
import store from './store.js';
>>>>>>> d2917d9c2f08d418dd00fa5854fbbc72cb3200dc
import App from './components/App';


//import a stylesheet here if applicable
console.log('inside index.js');
//doc renderer here

<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
render( 
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
>>>>>>> d2917d9c2f08d418dd00fa5854fbbc72cb3200dc
);