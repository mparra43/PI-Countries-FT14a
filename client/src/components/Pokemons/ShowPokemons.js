import React, {useState} from 'react'
import {GrFormNext} from 'react-icons/gr';
import {GrFormPrevious} from 'react-icons/gr';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {findPoke, filterPoke} from '../../actions/pokemons'
import './styles/showPokemons.css';


export const ShowPokemon = () => {
    const dispatch = useDispatch();
    const {showPokemon} = useSelector(state => state.pokemon);
    const [page, setPage] = useState(0);


    const previousPage = () => {
        if (page > 0)
            setPage(page - 9)
    }

    const nextPage = () => {
        setPage(page + 9)
    }

    const handleType = (type) => {
        console.log(type)
        dispatch(filterPoke(type))
    }
    const handlePoke = (poke) => {
        dispatch(findPoke(poke))
    }

    const showPoke = () => {
        return showPokemon.slice(page, page + 9)
    }

    return (
        <div>
            <div className="flex-container">
                <button className="btn-left" onClick={previousPage}><GrFormPrevious/></button>
                {showPokemon ? showPoke().map((e) => (
                    <div key={e.id} className="card">
                        <img src={e.picture} alt={e.name} className="img-poke"/>
                            <Link to={`/pokemon/show/${e.name}`}>
                                <button className="btn-Poke" onClick={() => {handlePoke(e)}}>
                                    <h3>{e.name.toUpperCase()}</h3></button>
                            </Link>
                            <h4>Types</h4>
                            <div className="buttons">
                                {e.type.map((e) => (
                                    <Link key={e} to={`/allPoke`}>
                                        <button onClick={() => {handleType(e)}}>{e}</button>
                                    </Link>
                                ))
                                }
                        </div>
                    </div>
                )): console.log("espere")
                }
                <button className="btn-left" onClick={nextPage}><GrFormNext/></button>
            </div>
        </div>
    )
}