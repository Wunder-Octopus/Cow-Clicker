//React starts here
import React from 'react';
import * as ReactDOM from 'react-dom';
import createRoot from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';

//import a stylesheet here if applicable
console.log('inside index.js');
//doc renderer here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
);