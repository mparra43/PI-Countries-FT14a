import React from 'react';
import {connect} from 'react-redux';
import Todo from '../Todo/Todo';
import {Link} from 'react-router-dom';

export function Countries(props) {

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
            <p> Search by name <input type="search" name="name" placeholder="Country..."/></p>
                <button type="submit">Submit</button>
            </form>
            <h1>Countries</h1>
            {props.map( (country)=>  <Link to={`/edit/${country.id}`} key={country.id}>  <Country  title={country.name}/> </Link> ) }
        </div>
    )
};

const mapStateToProps = state => {
    return{ todos: state }

}

export default connect( mapStateToProps)(Todos)