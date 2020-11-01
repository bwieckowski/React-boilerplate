import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import routes from './routes';

const Router: React.FC = () => (
  <BrowserRouter>
  <Switch>
    {
      routes.map((route, index) => (
        <Route key={index} {...route.route} >
          <route.component />
        </Route>
      ))
    }
  </Switch>
  </BrowserRouter>
)

export default Router;