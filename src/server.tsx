import express from 'express'
import path from 'path';
import { createStore } from "redux";
import React from 'react';
import { StaticRouter } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import rootReducer from './store/rootReducer';
import Html from './Html';
import Router from './router/Router';

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('*', async (req: any, res: any) => {
  const scripts = ['vendor.js', 'client.js'];
  const context = {};
  const store = createStore(rootReducer);

  const appMarkup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Provider store={store}>
        <Router/>
      </Provider>
    </StaticRouter>
  );

  const html = ReactDOMServer.renderToStaticMarkup(
    <Html
      children={ appMarkup }
      scripts = { scripts }
    />
  );

  res.send(`<!doctype html>${html}`);
});

app.listen(3000, () => console.log('Listening on localhost:3000'));