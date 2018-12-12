import React from 'react';
import Router from './Router';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

//import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from './reducers';

//const store = createStore(rootReducer, devToolsEnhancer());
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(reduxThunk)
));

const iBolttApp = prop => (
    <Provider store={store}>
      <Router />
    </Provider>
);

export default iBolttApp;