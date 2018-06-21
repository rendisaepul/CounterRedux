import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import CounterRedux from './src/index';

import counterReduxReducer from './src/reducer';
import toggleColorReducer from './src/reducerToggle';

/**
 * This is main reducer, its where the reducer combined
 */

const mainReducers = combineReducers({
  counterReduxReducer,
  toggleColorReducer
});

/**
 * create the store
 * single JS object that hold our state
 */
const store = createStore(
  mainReducers
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CounterRedux/>
      </Provider>
    );
  }
}

export default App;