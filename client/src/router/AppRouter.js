import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';

import {LoginScreen} from '../components/auth/LoginScreen';
import {MainScreen} from '../components/mainScreen/MainScreen';
import {Pokemon} from '../components/header/Pokemon';
import {PokemonId} from '../components/Pokemons/PokemonId';
import {WholePoke} from '../components/header/WholePoke';
import {startChecking} from '../actions/auth';
import {PublicRoute} from './PublicRoute';
import {PrivateRoute} from './PrivateRoute';
import {getAllPokemon, getAllTypes} from "../actions/pokemons";


export const AppRouter = () => {

    const dispatch = useDispatch();
    const {checking, id} = useSelector(state => state.auth);

    useEffect(() => {

        dispatch(startChecking());
        dispatch(getAllPokemon());
        dispatch(getAllTypes());
    }, [dispatch])

    if (checking) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated={!!id}
                    />


                    <PrivateRoute
                        exact
                        path="/main"
                        component={MainScreen}
                        isAuthenticated={!!id}
                    />

                    <PrivateRoute
                        exact
                        path="/pokemon/show/:name"
                        component={Pokemon}
                        isAuthenticated={!!id}
                    />
                    <PrivateRoute
                        exact
                        path="/pokemon/:name"
                        component={Pokemon}
                        isAuthenticated={!!id}
                    />

                    <PrivateRoute
                        exact
                        path="/allPoke"
                        component={WholePoke}
                        isAuthenticated={!!id}
                    />


                    <Redirect to="/main"/>
                </Switch>
            </div>
        </Router>
    )
}
