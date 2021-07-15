import React from 'react';
import {GiRocketFlight} from 'react-icons/gi'
import {BiSearchAlt2} from 'react-icons/bi'
import showcase9 from '../../img/showcase9.jpg';
import {Link} from "react-router-dom";


export const Home = () => {
    return (
        <div className="home">
            <div className="nav-home">
                <div className="img">
                    <GiRocketFlight/>
                    <h1>THE ADVENTURE BEGINS</h1>
                </div>

                <button>
                    <BiSearchAlt2/>
                </button>
            </div>
            <img src={showcase9} alt="logo192" className="img"/>
            <div className="login">
                <Link exact to="/login" >log in</Link>
            </div>
            <div className="login">
                <Link exact to="/register" >Registrarse</Link>
            </div>
        </div>
    );
};