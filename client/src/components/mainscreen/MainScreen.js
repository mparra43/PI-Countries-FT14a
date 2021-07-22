import React from 'react';
import {Navbar} from '../ui/Navbar';
import {SearchsBar} from "../searchBar/SearchsBar";
import {ShowCountries} from "../Countries/ShowCountries";
import {FilterCountries} from "../Countries/FilterCountries";
import {AllCountries} from "../Countries/AllCountries";
import {FilterActivities} from "../activity/FilterActivities";
import {ActivityModal} from "../activity/ActivityModal";
import './styles/mainScreen.css';

export const MainScreen = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <FilterCountries/>
            <div className="barra">
                <AllCountries/>
                <SearchsBar/>
                <hr/>
            </div>
            <div>
                <FilterActivities/>
            </div>
            <ShowCountries/>
            <ActivityModal/>
        </div>
    )
}
