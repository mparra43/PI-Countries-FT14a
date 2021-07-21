import React from 'react'
import {filterActivities} from "../../actions/activities";
import {uiOpenModal} from "../../actions/ui"
import {useDispatch, useSelector} from "react-redux";
import './styles/filterActivities.css';

import {Link} from "react-router-dom";

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
    const handleActivity9 = () => dispatch(uiOpenModal());

    return (
        <div>
            <div id="myBtnContainer">
                <h3 className="title-a">Actividades</h3>
                <hr/>
                <button className="btn-a" onClick={handleActivity1}><Link to="/Activity">Buseo</Link></button>
                <button className="btn-a" onClick={handleActivity2}><Link to="/Activity">FlyBoard</Link></button>
                <button className="btn-a" onClick={handleActivity3}><Link to="/Activity">JetSki</Link></button>
                <button className="btn-a" onClick={handleActivity4}><Link to="/Activity">kayack</Link></button>
                <button className="btn-a" onClick={handleActivity5}><Link to="/Activity">Snorkel</Link></button>
                <button className="btn-a" onClick={handleActivity6}><Link to="/Activity">surf</Link></button>
                <button className="btn-a" onClick={handleActivity7}><Link to="/Activity">Trekking</Link></button>
                <button className="btn-a" onClick={handleActivity8}><Link to="/Activity">Tour</Link></button>
                <button className="btn-a" onClick={handleActivity9}>+</button>
            </div>
        </div>
    )
}
