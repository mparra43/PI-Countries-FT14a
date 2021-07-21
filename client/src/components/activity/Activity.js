import React from 'react'
import {useSelector} from "react-redux";

export const Activity = (props) => {

    const {activitiesFilter} = useSelector(state => state.activities)

    return (
        <div>
            <h1> {props.name}</h1>
            <div>
               <h1>{activitiesFilter[0].name}</h1>
                <h3>Dificultad:{activitiesFilter[0].complexity} </h3>
                <h3>Duración: {activitiesFilter[0].term}</h3>
                <h3>Temporada:{activitiesFilter[0].season}</h3>
                <h3>Países donde podemos realizar la actividad </h3>
                {activitiesFilter.map((e)=><h4>*{e.country}</h4>)}
            </div>
        </div>
    )
}