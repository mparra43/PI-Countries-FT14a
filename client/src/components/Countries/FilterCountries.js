import React from 'react'
import {filterCountries} from "../../actions/countries";
import {useDispatch, useSelector} from "react-redux";
import './styles/filterCountries.css';
import {Link} from "react-router-dom";


export const FilterCountries = () => {
    const {countriesFilter} = useSelector(state => state.countries)
    const dispatch = useDispatch();

    const handleLeaks1 = () => dispatch(filterCountries("Africa"));
    const handleLeaks2 = () => dispatch(filterCountries("Americas"));
    const handleLeaks3 = () => dispatch(filterCountries("Asia"));
    const handleLeaks4 = () => dispatch(filterCountries("Europe"));
    const handleLeaks5 = () => dispatch(filterCountries("Oceania"));

    return (
        <div>
            <div className="Continentes">
                <h3 className="title">Continentes</h3>
                <button className="btn active" onClick={handleLeaks1}><Link to="/Continent"><h4>África</h4></Link></button>
                <button className="btn" onClick={handleLeaks2}><Link to="/Continent"><h4>América</h4></Link></button>
                <button className="btn" onClick={handleLeaks3}><Link to="/Continent"><h4>Asia</h4></Link></button>
                <button className="btn" onClick={handleLeaks4}><Link to="/Continent"><h4>Europa</h4></Link></button>
                <button className="btn" onClick={handleLeaks5}><Link to="/Continent"><h4>Oceanía</h4></Link></button>
            </div>
        </div>
    )
}
