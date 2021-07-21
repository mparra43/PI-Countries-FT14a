import React from 'react';
import {Navbar} from '../ui/Navbar';
import {SearchsBar} from "../searchBar/SearchsBar";
import {ShowCountries} from "../Countries/ShowCountries";
import {FilterCountries} from "../Countries/FilterCountries";
import {AllCountries} from "../Countries/AllCountries";
import {FilterActivities} from "../activity/FilterActivities";
import {ActivityModal} from "../activity/ActivityModal";

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
            <ActivityModal/>
        </div>
    )
}
