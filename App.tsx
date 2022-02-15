import React, {Component} from 'react';
import ScreenNavigator from './src/navigation/screenNavigator';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import debitCardReducer from './src/reducers/DebitCard/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(debitCardReducer, composeWithDevTools());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ScreenNavigator />
      </Provider>
    );
  }
}
