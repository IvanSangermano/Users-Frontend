import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { UserForm } from '../components/users/UserForm';
import { UserScreen } from '../components/users/UserScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { Layout } from '../components/ui/Layout';

export const MainRouter = () => {
  return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/home">
              <HomeScreen />
            </Route>
            <Route exact path="/users">
              <UserScreen />
            </Route>
            <Route exact path="/users/:action/:technicianId?">
              <UserForm />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </Layout>
      </Router>
  );
};