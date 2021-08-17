import React from 'react';
import {Link} from "react-router-dom";
import {SiPokemon} from 'react-icons/si'
import {CgPokemon} from 'react-icons/cg'




export const Home = () => {
    return (
        <div className="home">
            <div className="nav-home">
                <div className="img">
                    <CgPokemon/>
                    <SiPokemon/>
                </div>
            </div>
            <div className="login">
                <Link exact to="/login" >log in</Link>
            </div>
            <div className="login">
                <Link exact to="/register" >Registrarse</Link>
            </div>
        </div>
    );
};