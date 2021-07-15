import React from 'react';
import {Nav} from "../ui/Nav"
import{AddActivity}from"../activity/AddActivity"
import {GrAdd} from 'react-icons/gr'



export const MainScreen = () => {
    return (
        <div>
            <Nav/>
            <AddActivity/>
            <button>
                <GrAdd/>
            </button>

        </div>
    )
};