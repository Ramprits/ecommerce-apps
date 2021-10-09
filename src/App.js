import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import IndexPage from "./pages/Index.js";
import Login from "./pages/auth/Login";
import NotfoundPage from "./pages/Notfound.js";
import Register from "./pages/auth/Register.js";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <IndexPage/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>
                <Route exact path="/notfound">
                    <NotfoundPage/>
                </Route>
            </Switch>
        </Router>
    );
}
