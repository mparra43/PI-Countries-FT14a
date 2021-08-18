import React, {useState} from 'react'
import {CgPokemon, CgSearch} from 'react-icons/cg';
import {GiSpikedShell} from 'react-icons/gi'
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {filterPoke, pokemonDetail} from "../../actions/pokemons";
import {uiOpenModal} from "../../actions/ui";
import './styles/barPoke.css';



export const FilterPokemon = () => {

    const [name, namePokemon] = useState( "" );

    const handleSearchChange = (e) => {
        const  name =  e.target.value;
        namePokemon(name);
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        console.log(name)
        dispatch(pokemonDetail(name));
    }
    const dispatch = useDispatch();

    const handleApi = () => dispatch(filterPoke('Api'));
    const handleBd = () => dispatch(filterPoke('bd'));
    const handleAdd = () => dispatch(uiOpenModal());
    return (

        <div>
            <ul className="ul-filter">
                <li className="btn"><Link to="/main">
                        <button className="btn-i" ><CgPokemon className="log-bol"/></button>
                    </Link></li>
                <li className="btn"><Link to="/allPoke">
                    <button className="btn-pk" onClick={handleApi}>Pokémons</button>
                </Link></li>
                <li className="btn"><Link to="/allPoke"><button className="btn-fi" onClick={handleBd}>New Pokémons</button></Link></li>
                <li className="btn"><button className="btn-fg" onClick={handleAdd}><GiSpikedShell/> Create Pokémon</button></li>
                <li className="li-s"><span className="frase" >Search by name</span></li>
                <li className="li-input">
                    <input
                        type="text"
                        placeholder="Search.."
                        name="search"
                        value ={name}
                        onChange={handleSearchChange}
                    />
                </li>
                <li className="li">
                        <button className="btn-lupa" onClick={handleSubmitSearch}><Link to={`/Pokemon/${name}`}>
                            <CgSearch className="lupa"/></Link ></button></li>
            </ul>
        </div>
    )
}
