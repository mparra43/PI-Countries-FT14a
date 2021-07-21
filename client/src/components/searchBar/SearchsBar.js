import React, {useState}from 'react'
import {CgSearch} from 'react-icons/cg';
import './styles/searchsBar.css';
import {findCountry } from "../../actions/countries";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const SearchsBar = () => {

    const dispatch = useDispatch();
    const [nameCountry, setNameCountry] = useState( "" );
    const {coName} = useSelector(state=> state.countries)

    const handleSearchChange = (e) => {
        const  name =  e.target.value;
        setNameCountry(name);
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        dispatch(findCountry(nameCountry));
    }

    return (
        <div className="topnav">
            <span >Escoge el pais donde qieres viajar</span>
            <div className="search-container">
                <form onSubmit={handleSubmitSearch}>
                    <input
                        type="text"
                        placeholder="Search.."
                        name="search"
                        value ={nameCountry}
                        onChange={handleSearchChange}
                    />
                    <button type="submit"><Link to={`/country/${coName.name}`}><CgSearch/></Link ></button>
                </form>
            </div>
        </div>
    )
}