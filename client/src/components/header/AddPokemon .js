import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import {CgAddR} from 'react-icons/cg';

export const AddPokemon = () => {

    const dispatch = useDispatch();

    const handleClickNew = () => {
        dispatch( uiOpenModal() );
    }


    return (
        <button
        >
            <i >
                <CgAddR onClick={ handleClickNew }/>
            </i>
        </button>
    )
}