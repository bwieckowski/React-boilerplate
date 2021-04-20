import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
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

const App = () => (
  <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  </Provider>
)

ReactDOM.hydrate(
  <App/>,
  document.getElementById('app')
);
