import React from 'react'
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import './styles/showCountries.js.css';
import {Country} from "./Country";


export const ShowCountries = (props) => {

    const {option, showCountries, countries} = useSelector(state => state.countries);

    return (
        <div>
            {!option?countries.data.map((e) =>
                <div className="show">
                    <div className="card">
                        <Link to={`/country/${e.id}`} key={e.id}> <Country  name={e.name}/></Link>
                        <img src={e.flag} className="flag"/>
                        <h3> {e.continent}</h3>
                    </div>
                </div>): showCountries.map((e) =>
                <div className="show">
                    <div className="card">
                        <Link to="/country" key={e.id}><h3>{e.name}</h3></Link>
                        <img src={e.flag} alt="flag" className="flag"/>
                        <h3> {e.continent}</h3>
                    </div>
                </div>)}
        </div>
    )
}