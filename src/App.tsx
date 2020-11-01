import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import rootReducer from './store/rootReducer';
import rootSaga from './store/rootSaga';
import './App.css';
import Router from './router/Router';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider >
  );
}

export default App;
