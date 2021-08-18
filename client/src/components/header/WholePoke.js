import React from 'react'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './styles/wholePoke.css'

export const WholePoke = () => {

    const {pokemonFilter} = useSelector(state => state.pokemon)
    console.log(pokemonFilter)

    return (
        <div className="list">
            <h1>List of Pokémons</h1>
            <hr/>
            <table className="table">
                <tr>
                    <th>Id</th>
                    <th>Pokémon</th>
                    <th>Name</th>
                </tr>
            {pokemonFilter.map((e) =>(
            <tr key={e.id}>
                <td key={e.id}><Link to={`/pokemon/${e.id}`}><button>{e.id}</button></Link></td>
                <td><img className="img-whole" src={e.picture} alt={e.name}/></td>
                <td>{e.name}</td>
            </tr>
            ))}
            </table>
        </div>
    )
}