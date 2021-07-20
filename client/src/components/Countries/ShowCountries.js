import React from 'react'
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import './styles/showCountries.js.css';

export const ShowCountries = () => {

    const {showCountries} = useSelector(state => state.countries);

    console.log(showCountries)
    return (

        <div>
            {showCountries.data.map((e) =>
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