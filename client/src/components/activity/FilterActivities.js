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
            <div id="myBtnContainer"><h4></h4>
                <h3 className="title-a">Actividades</h3>
                <hr/>
                <button className="btn-a1" onClick={handleActivity1}><Link to="/Activity"><h4>Buseo</h4></Link></button>
                <button className="btn-a" onClick={handleActivity2}><Link to="/Activity"><h4>FlyBoard</h4></Link></button>
                <button className="btn-a" onClick={handleActivity3}><Link to="/Activity"><h4>JetSki</h4></Link></button>
                <button className="btn-a" onClick={handleActivity4}><Link to="/Activity"><h4>kayack</h4></Link></button>
                <button className="btn-a" onClick={handleActivity5}><Link to="/Activity"><h4>Snorkel</h4></Link></button>
                <button className="btn-a" onClick={handleActivity6}><Link to="/Activity"><h4>surf</h4></Link></button>
                <button className="btn-a" onClick={handleActivity7}><Link to="/Activity"><h4>Trekking</h4></Link></button>
                <button className="btn-a" onClick={handleActivity8}><Link to="/Activity"><h4>Tour</h4></Link></button>
                <button className="btn-a" onClick={handleActivity9}><h4>+</h4></button>
            </div>
        </div>
    )
}
