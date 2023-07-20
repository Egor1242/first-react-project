import { React, useEffect, useState, createContext } from "react"
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { menus } from "../../constants/menus"
import { ApiConnect } from "../../services/ApiConnect"

import { Header } from "../../components/Header"
import { CountryList } from "./components/CountriesPage/components/CountryList"
import { CurrentCountry } from "./components/CountriesPage/components/CurrentCountry";
import { MainPage } from "./components/MainPage"
import { CountriesPage } from "./components/CountriesPage"

export const CountryListContext = createContext([])

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/countries",
        element: <CountriesPage />,
        children: [
            {

                path: "all",
                element: <CountryList />
            },

            {
                path: ":currentCountry",
                element: <CurrentCountry />
            }
        ]
    }
]);


export const RestCountriesReact = () => {

    const [countryList, setCountryList] = useState([]);

    const getResponse = () => {
        ApiConnect.sendRequest().then(
            (response) =>
                setCountryList(response.response)
        );
    }

    useEffect(getResponse, [])


    return (
        <div className="rest-countries">
            <Header headers={menus} />
            <CountryListContext.Provider value={countryList}>
                <RouterProvider router={router} />
            </CountryListContext.Provider>
        </div>
    );
}