import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import routes from './routes';

const Router: React.FC = () => (
  <Switch>
    {
      routes.map((route, index) => (
        <Route key={index} {...route.route} >
          <route.component />
        </Route>
      ))
    }
  </Switch>
)

export default Router;