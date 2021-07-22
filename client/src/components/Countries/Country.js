import React from 'react'
import {useSelector} from "react-redux";
import './styles/';



export const Country = () => {

    const {coName} = useSelector(state => state.countries);
    console.log(coName);

    return (
        <div>
            <img src={coName.flag} alt="flag" className="bandera"/>
            <h1>{coName.id}</h1>
            <h1>{coName.name}</h1>
            <h3>Capital:{coName.capital}</h3>
            <h4>Continente:{coName.continent}</h4>
            <h4>Subregión:{coName.subregion}</h4>
            <h4>Area: {coName.area}</h4>
            <h4>Población:{coName.population}</h4>
        </div>
    )
}