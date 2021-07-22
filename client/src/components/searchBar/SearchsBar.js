import React, {useState}from 'react'
import {CgSearch} from 'react-icons/cg';
import './styles/searchsBar.css';
import {findCountry } from "../../actions/countries";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const SearchsBar = () => {

    const dispatch = useDispatch();
    const [nameCountry, setNameCountry] = useState( "" );


    const handleSearchChange = (e) => {
        const  name =  e.target.value;
        setNameCountry(name);
    }
    console.log(nameCountry)

    const handleSubmitSearch = (e) => {
       e.preventDefault();
        dispatch(findCountry(nameCountry));
    }

    return (
        <div className="topnav">
            <span className="frase" >Busca el pais donde quieres viajar</span>
            <div className="search-container">
                <form onSubmit={handleSubmitSearch}>
                    <input
                        type="text"
                        placeholder="Search.."
                        name="search"
                        value ={nameCountry}
                        onChange={handleSearchChange}
                    />
                    <button className="lupa" type="submit"><Link  to={`/country/${nameCountry}`}><CgSearch className="lupa"/></Link ></button>
                </form>
            </div>
        </div>
    )
}