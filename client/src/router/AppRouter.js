import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
  
import { useDispatch, useSelector } from 'react-redux';

import {Home} from "../components/home/home";
import { LoginScreen } from '../components/auth/LoginScreen';
import { MainScreen } from '../components/mainScreen/MainScreen';
import { Country } from '../components/Countries/country';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import {getCountries} from "../actions/countries";
import {getAllCountries} from "../actions/countries";
import{getAllActivities} from "../actions/activities";

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, id } = useSelector( state => state.auth);

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch])

    if ( checking ) {
        dispatch(getCountries());
        dispatch(getAllCountries());
        dispatch(getAllActivities());
        return (<h5>Espere...</h5>);

    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen }
                        isAuthenticated={ !!id }
                    />
                    <PublicRoute
                        exact
                        path="/home"
                        component={Home}
                        isAuthenticated={ !!id }
                    />

                    <PrivateRoute 
                        exact 
                        path="/main"
                        component={ MainScreen }
                        isAuthenticated={ !!id }
                    />

                    <PrivateRoute
                        exact
                        path="/country"
                        component={Country}
                        isAuthenticated={ !!id }
                    />


                    <Redirect to="/main" />
                </Switch>
            </div>
        </Router>
    )
}
