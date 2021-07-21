import React from 'react'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Country} from "./Country";

export const Continent = () => {

    const {countriesFilter} = useSelector(state => state.countries)

    return (
        <div>
            <h1>{countriesFilter[0].continent}</h1>
            <hr/>
            {countriesFilter.map((e) =>
                <div className="show">
                    <div className="card">
                        <Link to={`/country/${e.id}`} key={e.id}> <Country name={e.name}/></Link>
                        <img src={e.flag} alt="flag" className="flag"/>
                        <h3> {e.continent}</h3>
                    </div>
                </div>)}
        </div>
    )
}