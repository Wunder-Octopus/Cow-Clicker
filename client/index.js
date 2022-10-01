//React starts here
import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';


//import a stylesheet here if applicable
console.log('inside index.js');
//doc renderer here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);