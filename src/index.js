import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  default: null,
});

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
    ),
  ),
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
