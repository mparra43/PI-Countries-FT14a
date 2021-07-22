import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {findCountry} from "../../actions/countries";

export const Continent = () => {

    const {countriesFilter} = useSelector(state => state.countries)
    const dispatch = useDispatch();
    const handleCountry = (name) => {
        dispatch(findCountry(name))
    }
    return (
        <div>
            <h1>{countriesFilter[0].continent}</h1>
            <hr/>
            {countriesFilter.map((e) =>
                <div key={e.id} className="show">
                    <div className="card">
                        <Link to={`/country/${e.id}`}>
                            <button className="btn-country" onClick={() => {
                                handleCountry(e.name)
                            }}>{e.name}</button>
                        </Link>
                        <img src={e.flag} alt="flag" className="flag"/>
                    </div>
                </div>)}
        </div>
    )
}