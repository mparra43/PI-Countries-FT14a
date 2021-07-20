import React from 'react'
import {filterActivities} from "../../actions/activities";
import {useDispatch} from "react-redux";
import './styles/filterActivities.css';

export const FilterActivities = () => {

    const dispatch = useDispatch();

    const handleActivity1 = () => dispatch(filterActivities("Buceo"));
    const handleActivity2 = () => dispatch(filterActivities("Flyboard"));
    const handleActivity3 = () => dispatch(filterActivities("Jetski"));
    const handleActivity4 = () => dispatch(filterActivities("Kayack"));
    const handleActivity5 = () => dispatch(filterActivities("Snorkel"));
    const handleActivity6 = () => dispatch(filterActivities("Surf"));
    const handleActivity7 = () => dispatch(filterActivities("Trekking"));
    const handleActivity8 = () => dispatch(filterActivities("Tour"));
    const handleActivity9 = () => dispatch(filterActivities("Oceania"));

    return (
        <div>
            <div id="myBtnContainer">
                <h3 className="title-a">Actividades</h3>
                <hr/>
                <button className="btn-a" onClick={handleActivity1}>Buceo</button>
                <button className="btn-a" onClick={handleActivity2}>FlyBoard</button>
                <button className="btn-a" onClick={handleActivity3}>JetSki</button>
                <button className="btn-a" onClick={handleActivity4}>kayack</button>
                <button className="btn-a" onClick={handleActivity5}>Snorkel</button>
                <button className="btn-a" onClick={handleActivity6}>surf</button>
                <button className="btn-a" onClick={handleActivity7}>Trekking</button>
                <button className="btn-a" onClick={handleActivity8}>Tour</button>
                <button className="btn-a" onClick={handleActivity9}>+</button>
            </div>
        </div>
    )
}
