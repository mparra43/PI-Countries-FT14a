import React from 'react';
import{useSelector} from "react-redux";
import {Navbar} from '../ui/Navbar';
import {SearchsBar} from "../searchBar/SearchsBar";
import {AddActivity} from "../activity/AddActivity";
import {ShowCountries} from "../Countries/ShowCountries";
import {FilterCountries} from "../Countries/FilterCountries";
import {AllCountries} from "../Countries/AllCountries";
import {FilterActivities} from "../activity/FilterActivities";

export const MainScreen = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>

            <div>
                <FilterCountries/>
                <SearchsBar/>
                <AllCountries/>
                <hr/>
            </div>
            <div>
                <FilterActivities/>
            </div>
            <ShowCountries/>
            <AddActivity/>

        </div>
    )
}
