import { React, useEffect, useState, createContext } from "react"
import { Outlet } from "react-router-dom";

import { menus } from "../../constants/menus"
import { ApiConnect } from "../../services/ApiConnect"

import { Header } from "./components/Header"
import { DropDownHeader } from "./components/DropDownHeader";

import "./styles.sass"

export const CountryListContext = createContext([]);

export const RestCountriesReact = () => {

    const [countryList, setCountryList] = useState([]);

    const getResponse = () => {
        ApiConnect.sendRequest().then(
            (response) =>
                setCountryList(response.response)
        );
    }

    useEffect(getResponse, []);

    return (
        <div className="rest-countries">
            <Header headers={menus} />
            <DropDownHeader headers={menus} />

            <CountryListContext.Provider value={countryList}>
                <Outlet />
            </CountryListContext.Provider>
        </div>
    );
}