import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {useState} from "react";
import './activity.css';
//import  { addActivity} from '../../actions/index';
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');
export const AddActivity = (props) => {
    const closeModal = () => {

    }
    const [input, setInput] = useState({name: '', complexity: '', term: '', season: '',});
    const handleSubmit = e => {
        e.preventDefault();
        props.addActivity({name: input.name, complexity: input.complexity, term: input.term, season: input.season,})
    }
    const handleChange = (event) => {
        setInput({...input, [event.target.name]: event.target.value,})
    }
    return (
        <Modal
            isOpen={false}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeout={200}
        >
            <div className="container-Activity">
                <h1> New Activity </h1>
                <hr/>
                <form onSubmit={e => handleSubmit(e)}>
                    <label>Name</label><br/>
                    <input name="name" value={input.name} onChange={handleChange}/><br/>
                    <label>Complexity</label><br/>
                    <select name="complexity" value={input.complexity} onChange={handleChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select><br/>
                    <label>Term</label><br/>
                    <input name="term" value={input.term} onChange={handleChange}/><br/>
                    <label>Season</label><br/>
                    <input name="season" value={input.season} onChange={handleChange}/><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Modal>
    );
};
export default connect(null, mapDispatchToProps)(AddActivity)