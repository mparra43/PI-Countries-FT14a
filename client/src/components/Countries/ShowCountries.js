import React from 'react'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import './styles/showCountries.js.css';
import {findCountry} from '../../actions/countries';


export const ShowCountries = (props) => {

    const {option, showCountries, countries, coName} = useSelector(state => state.countries);

    const dispatch = useDispatch();

    const handleCountry = (name) => {
        dispatch(findCountry(name))
    }
console.log(coName)
    return (
        <div>
            <h2 className="p-title">Países del Mundo </h2>
            {!option ? countries.data.map((e) =>
                <div key={e.id} className="show">
                    <div className="card">
                        <img src={e.flag} alt="flag" className="flag"/>
                        <Link to={`/country/${e.id}`}>
                            <button className="btn-country" onClick={() => {
                                handleCountry(e.name)
                            }}>{e.name}</button>
                        </Link>
                        <h3> {e.continent}</h3>
                    </div>
                </div>) : showCountries.map((e) =>
                <div key={e.id} className="show">
                    <div  className="card">
                        <img src={e.flag} alt="flag" className="flag"/>
                        <Link to={`/country/${e.id}`}>
                            <button className="btn-country" onClick={() => {
                                handleCountry(e.name)
                            }}>{e.name}</button>
                        </Link>
                        <h3> {e.continent}</h3>
                    </div>
                </div>)}
        </div>
    )
}