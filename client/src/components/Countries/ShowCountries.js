import React from 'react'
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import './styles/showCountries.js.css';

export const ShowCountries = () => {

    const { countries} = useSelector(state => state.countries);


    return (

        <div>
            {countries.data.map((e) =>
                <div className="show">
                    <div className="card">
                        <Link to="/country" key={e.id}><h3>{e.name}</h3></Link>
                        <img src={e.flag} className="flag"/>
                        <h3> {e.continent}</h3>
                    </div>
                </div>)}

        </div>
    )
}