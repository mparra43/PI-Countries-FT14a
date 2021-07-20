import React, {useState} from 'react'
import {orderCountries} from "../../actions/countries";
import {useDispatch, useSelector} from "react-redux";



export const AllCountries = () => {
    const dispatch = useDispatch();
    const [order, setOrder] = useState( "Selecciona el orden");


    const handleOptionChange = (e) => {
        const  selectOrder =  e.target.value;
        setOrder(selectOrder);
    }


    const handleSubmitOrder = (e) => {
        e.preventDefault();
        dispatch( orderCountries(order));
    }

    return (
        <div>

            <form onSubmit={handleSubmitOrder} >
                <label>Ordenar por:</label>
                <select className="select"
                        name="order"
                        value={order}
                        onChange={ handleOptionChange} >
                    <option>Selecciona el orden</option>
                    <option>Orden alfabético</option>
                    <option>Numero de población</option>
                </select>
                <button type="submit">
                    <span>Ordenar</span>
                </button>
            </form>
        </div>
    )
}
