import React from 'react'
import {useSelector} from "react-redux";
import './styles/Country.css';



export const Country = () => {

    const {coName} = useSelector(state => state.countries);

    return (
        <div>
            <div className="country-card">
                <img src={coName.flag} alt="flag" className="bandera"/>
                <h1>{coName.name}</h1>
                <hr/>
                <h3>{coName.id}</h3>
                <h3>Capital:{coName.capital}</h3>
                <h4>Continente:{coName.continent}</h4>
                <h4>Subregión:{coName.subregion}</h4>
                <h4>Area: {coName.area}</h4>
                <h4>Población:{coName.population}</h4>
            </div>
        </div>
    )
}