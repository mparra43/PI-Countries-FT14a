import React from 'react'
import {useDispatch} from "react-redux";
import {GiPokecog} from 'react-icons/gi';
import {FcAlphabeticalSortingAz} from 'react-icons/fc';
import {FcAlphabeticalSortingZa} from 'react-icons/fc';
import {ImPower} from 'react-icons/im';
import {CgArrowsExchangeV} from 'react-icons/cg';
import {CgArrowsExchangeAltV} from 'react-icons/cg';
import {orderPokemonAZ, orderPokemonPower} from '../../actions/pokemons';
import './styles/orderPokemon.css';
import {SiPokemon} from "react-icons/si";



export const OrderPokemon = () => {

    const dispatch = useDispatch();
    const handleAz = () => dispatch(orderPokemonAZ('Az'));
    const handleZa = () => dispatch(orderPokemonAZ('Za'));
    const handlePowerMy = () => dispatch(orderPokemonPower('PowerMy'));
    const handlePowerMn = () => dispatch(orderPokemonPower('PowerMn'));
    return (
        <div>
            <ul className="ordenar">
                <li><GiPokecog className="bol-poke"/></li>
                <li><h1>Order</h1></li>
                <li><button className="btn-az" onClick={handleAz}><FcAlphabeticalSortingAz className="a-z"/></button></li>
                <li> <button className="btn-az" onClick={handleZa}><FcAlphabeticalSortingZa className="a-z"/></button></li>
                <li><SiPokemon className="poke-nombre"/></li>
                <li><ImPower className="rayo"/></li>
                <li><h1>Power</h1></li>
                <li><button className="btn-az" onClick={handlePowerMy}><CgArrowsExchangeV className="a-z"/></button></li>
                <li><button className="btn-az" onClick={handlePowerMn}><CgArrowsExchangeAltV className="a-z"/></button></li>
            </ul>
        </div>
    )
}
