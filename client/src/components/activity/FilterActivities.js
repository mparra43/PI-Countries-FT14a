import React from 'react'
import {filterCountries} from "../../actions/countries";
import {useDispatch} from "react-redux";
import './styles/filterActivities.css';

export const FilterActivities = () => {

    const dispatch = useDispatch();

    const handleLeaks1 = () => dispatch(filterCountries("Africa"));
    const handleLeaks2 = () => dispatch(filterCountries("Americas"));
    const handleLeaks3 = () => dispatch(filterCountries("Asia"));
    const handleLeaks4 = () => dispatch(filterCountries("Europe"));
    const handleLeaks5 = () => dispatch(filterCountries("Oceania"));

    return (
        <div>
            <div id="myBtnContainer">
                <h3 className="title-a">Actividades</h3>
                <hr/>
                <button className="btn-a" onClick={handleLeaks4}>Buceo</button>
                <button className="btn-a" onClick={handleLeaks3}>Fly Board</button>
                <button className="btn-a" onClick={handleLeaks2}>Jet Ski</button>
                <button className="btn-a" onClick={handleLeaks5}>kayack</button>
                <button className="btn-a" onClick={handleLeaks1}>Snorkel</button>
                <button className="btn-a" onClick={handleLeaks5}>surf</button>
                <button className="btn-a" onClick={handleLeaks5}>Trekking</button>
                <button className="btn-a" onClick={handleLeaks5}>Tour</button>
                <button className="btn-add" onClick={handleLeaks5}>+</button>
            </div>
        </div>
    )
}
