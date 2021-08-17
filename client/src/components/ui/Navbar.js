import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {startLogout} from '../../actions/auth';
import './styles/navBar.css';

export const Navbar = () => {

    const dispatch = useDispatch();
    const {name} = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <div className="nav-bar">
            <span className="name">{ name }</span>
            <button className="btn-salir" onClick={ handleLogout }>
                <span> Salir</span>
            </button>
        </div>
    )
}
