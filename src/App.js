import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import LoginPage from './pages/Login.js';
import NotfoundPage from './pages/Notfound.js';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/notfound">
            <NotfoundPage />
          </Route>
        </Switch>
    </Router>
  );
}
