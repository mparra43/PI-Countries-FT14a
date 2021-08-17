import React from 'react'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './styles/wholePoke.css'

export const WholePoke = () => {

    const {pokemonFilter} = useSelector(state => state.pokemon)
    console.log(pokemonFilter)

    return (
        <div>
            <h1>List of Pokémons</h1>
            <hr/>
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Pokémon</th>
                    <th>Name</th>
                </tr>
                </thead>
            </table>
            <tbody>
            {pokemonFilter.map((e) =>(
            <tr key={e.id}>
                <tr>
                    <Link to={`/pokemon/${e.id}`}><button>{e.id}</button></Link></tr>
                <tr>
                    <img className="img-whole" src={e.picture} alt={e.name}/>
                </tr>
                <tr>{e.name}</tr>
                <tr>{e.type}</tr>
            </tr>
            ))}
            </tbody>
        </div>
    )
}