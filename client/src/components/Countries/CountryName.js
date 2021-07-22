import React from 'react'
import {useSelector} from "react-redux";

export const CountryName = () => {

    const {coName} = useSelector(state => state.countries);

console.log(coName)
    return (
        <div>
            <h1>Colombia</h1>
        </div>
    )
}