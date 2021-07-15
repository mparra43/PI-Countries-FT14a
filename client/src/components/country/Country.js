import React from 'react';

export function Country(props) {
    return (
        <div>
            <div>{props.flag}</div>
            <h1>{props.id}</h1>
            <h1>{props.name}</h1>
            <h1>{props.continent}</h1>
            <h1>{props.capital}</h1>
            <h1>{props.area}</h1>
            <h1>{props.population}</h1>
        </div>
    )
};

export default Todo;