import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { uiCloseModal } from '../../actions/ui';
import {saveActivities} from "../../actions/activities";



const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');


const initEvent = {
    name: '',
    complexity: '',
    term: '',
    season: '',
    country: '',
}


export const ActivityModal = () => {
    const {allCountries} = useSelector( state => state.countries);
    const { modalOpen } = useSelector( state => state.ui );
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState( initEvent );
    const { name, complexity, term, season, country } = formValues;


console.log(formValues);

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }


    const closeModal = () => {
        // TODO: cerrar el modal
        dispatch( uiCloseModal() );
        setFormValues( initEvent );
    }



    const handleSubmitForm = (e) => {
        e.preventDefault();
            dispatch(saveActivities( formValues ))
            closeModal();

    }


    return (
        <Modal
          isOpen={ modalOpen }
          onRequestClose={ closeModal }
          style={ customStyles }
          closeTimeoutMS={ 200 }
          className="modal"
          overlayClassName="modal-fondo"
        >
            <h1> Nueva Actividad</h1>
            <hr />
            <form 
                className="container"
                onSubmit={ handleSubmitForm }
            >
                <div className="text">
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="name"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">nombre de la actividad</small>
                </div>
                <div className="select">
                    <label>Dificultad</label>
                    <select
                        className="form-control"
                        name="complexity"
                        autoComplete="off"
                        value={complexity}
                        onChange={ handleInputChange }
                    >
                        <option>1</option><br/>
                        <option>2</option><br/>
                        <option>3</option><br/>
                        <option>4</option><br/>
                    </select>
                    <small id="emailHelp" className="form-text text-muted">temporada del año para realizar la actividad</small>
                </div>

                <div className="text">
                    <label>Tiempo</label>
                    <input
                        type="text"
                        className="form-control"
                        name="term"
                        autoComplete="off"
                        value={term}
                        onChange={ handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Duración de la actividad</small>
                </div>

                <div className="select">
                <label>Temporada</label>
                <select
                    className="form-control"
                    name="season"
                    autoComplete="off"
                    value={season}
                    onChange={ handleInputChange }
                >
                    <option>Invierno</option><br/>
                    <option>Primavera</option><br/>
                    <option>verano</option><br/>
                    <option>Otoño</option><br/>
                </select>
                <small id="emailHelp" className="form-text text-muted">temporada del año para realizar la actividad</small>
            </div>

                <div className="select">
                    <label>País</label>
                    <select
                        className="form-control"
                        name="country"
                        autoComplete="off"
                        value={country}
                        onChange={ handleInputChange }
                    >{allCountries.data.map((e)=><option>{e.name}</option>)}
                    </select>
                    <small id="emailHelp" className="form-text text-muted">País donde realizar la actividad</small>
                </div>

                <button
                    type="submit"
                    className="btn-save"
                >
                    <span> Guardar</span>
                </button>

            </form>

        </Modal>
    )
}
