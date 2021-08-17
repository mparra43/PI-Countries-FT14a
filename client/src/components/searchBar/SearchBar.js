import React, {useState}from 'react'
import {CgPokemon, CgSearch} from 'react-icons/cg';
import {useDispatch} from "react-redux";
import {pokemonDetail} from "../../actions/pokemons";
import {Link} from "react-router-dom";
import './styles/searchsBar.css';
import {GiSpikedShell} from "react-icons/gi";

export const SearchBar = () => {

    const dispatch = useDispatch();
    const [name, namePokemon] = useState( "" );


    const handleSearchChange = (e) => {
        const  name =  e.target.value;
        namePokemon(name);
    }


    const handleSubmitSearch = (e) => {
       e.preventDefault();
        dispatch(pokemonDetail(name));
    }

    return (
        <div className="ser-bar">
            <ul>
                <li><span className="frase" >Search by name</span></li>
                <li><form onSubmit={handleSubmitSearch}>
                    <input
                        type="text"
                        placeholder="Search.."
                        name="search"
                        value ={name}
                        onChange={handleSearchChange}
                    />
                    <button className="lupa" type="submit" onClick={handleSubmitSearch}><Link to={`/Pokemon/${name}`}><CgSearch className="lupa"/></Link ></button>
                </form></li>
            </ul>
        </div>
    )
}