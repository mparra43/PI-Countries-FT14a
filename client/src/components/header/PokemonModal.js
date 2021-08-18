import React, {useState} from 'react';
import {GiSave} from 'react-icons/gi'
import {CgPokemon} from "react-icons/cg";
import {useSelector, useDispatch} from 'react-redux';
import Modal from 'react-modal';
import Select from 'react-select';
import {uiCloseModal} from '../../actions/ui';
import {savePokemon} from "../../actions/pokemons";





Modal.setAppElement('#root');


const initEvent = {
    name: "",
    lives: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    picture: "",
}


export const PokemonModal = () => {
    const {typesAll} = useSelector(state => state.pokemon);

    const {modalOpen} = useSelector(state => state.ui);
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initEvent);
    const [type, setTypes] = useState(initEvent.type);
    const {name, lives, attack, defense, speed, height, weight, picture} = formValues;


    console.log(type)
    const handleInputChange = ({target}) => {
          setFormValues({
              ...formValues,
              [target.name]: target.value
          });
      }

    const handleSelectChange = (type) => {
        setTypes(type);
        if(type.length === 1 ||type.length === 2 ) {
          let typesBd = type.map((e)=> {
              return e.value;
          })
            setFormValues({
                ...formValues,
                type : typesBd
            });

        }else {
            console.error("eroor")
        }

    }




    const closeModal = () => {
        dispatch(uiCloseModal());
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(formValues)
        dispatch(savePokemon(formValues))
        closeModal();
    }


    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1><CgPokemon className="log-bol"/> Create New Pokémon </h1>
            <hr/>
            <form onSubmit={handleSubmitForm}>
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <label>Lives</label>
                <input
                    type="text"
                    className="form-control"
                    name="lives"
                    placeholder="Number of lives"
                    autoComplete="off"
                    value={lives}
                    onChange={handleInputChange}
                />
                <label>Attack</label>
                <input
                    type="text"
                    className="form-control"
                    name="attack"
                    placeholder="Power of attack"
                    autoComplete="off"
                    value={attack}
                    onChange={handleInputChange}
                />
                <label>Defense</label>
                <input
                    type="text"
                    className="form-control"
                    name="defense"
                    placeholder="Power of defense"
                    autoComplete="off"
                    value={defense}
                    onChange={handleInputChange}
                />
                <label>Speed</label>
                <input
                    type="text"
                    className="form-control"
                    name="speed"
                    autoComplete="off"
                    value={speed}
                    onChange={handleInputChange}
                />
                <label>Height</label>
                <input
                    type="text"
                    className="form-control"
                    name="height"
                    autoComplete="off"
                    value={height}
                    onChange={handleInputChange}
                />
                <label>Weight</label>
                <input
                    type="text"
                    className="form-control"
                    name="weight"
                    autoComplete="off"
                    value={weight}
                    onChange={handleInputChange}
                />
                <label>Picture</label>
                <input
                    type="text"
                    className="form-control"
                    name="picture"
                    placeholder="Url of your Pokémon image"
                    autoComplete="off"
                    value={picture}
                    onChange={handleInputChange}
                />

                    <label>Type</label>
                    <Select
                        value={type}
                        options={typesAll}
                        onChange={handleSelectChange}
                        isMulti
                        placeholder="select maximum two types"
                    />
                <div>
                    <button type="submit" className="btn-save"><GiSave/> Save</button>
                </div>
            </form>
        </Modal>
    )
}
