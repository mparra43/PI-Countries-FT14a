import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import {Switch} from "react-router";
import {Registration} from "../components/auth/Registration";
import {LoginScreen} from "../components/auth/LoginScreen";
import {MainScreen} from "../components/country/MainScreen";
import {Home} from "../components/ui/Home";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/main" component={MainScreen}/>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Route exact path="/register" component={Registration}/>

                </Switch>
            </div>
        </BrowserRouter>
    );
};