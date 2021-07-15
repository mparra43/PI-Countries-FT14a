import React from 'react';

export const Activity = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.complexity}</h3>
            <h3>{props.term}</h3>
            <h3>{props.season}</h3>
        </div>
    )
};