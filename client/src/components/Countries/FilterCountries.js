import React from 'react'
import {filterCountries} from "../../actions/countries";
import {useDispatch, useSelector} from "react-redux";
import './styles/filterCountries.css';


export const FilterCountries = () => {
    const {countriesFilter} = useSelector(state => state.countries)
    const dispatch = useDispatch();

    const handleLeaks1 = () => dispatch(filterCountries("Africa"));
    const handleLeaks2 = () => dispatch(filterCountries("Americas"));
    const handleLeaks3 = () => dispatch(filterCountries("Asia"));
    const handleLeaks4 = () => dispatch(filterCountries("Europe"));
    const handleLeaks5 = () => dispatch(filterCountries("Oceania"));
    console.log(countriesFilter);
    return (
        <div>
            <div id="myBtnContainer">
                <h3 className="title">Continentes</h3>
                <button className="btn active" onClick={handleLeaks1}> África</button>
                <button className="btn" onClick={handleLeaks2}>América</button>
                <button className="btn" onClick={handleLeaks3}>Asia</button>
                <button className="btn" onClick={handleLeaks4}>Europa</button>
                <button className="btn" onClick={handleLeaks5}>Oceanía</button>
            </div>
        </div>
    )
}
