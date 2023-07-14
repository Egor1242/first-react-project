import { React, useEffect, useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { menus } from "../../constants/menus"
import { ApiConnect } from "../../services/ApiConnect"

import { Header } from "../../components/Header"
import { MainPage } from "./components/MainPage"
import { CountriesPage } from "./components/CountriesPage"

export const RestCountriesReact = () => {
    
    const [response, setResponse] = useState([]);

    const getResponse = () => {
        ApiConnect.sendRequest().then((response) => setResponse(response.response));
    }

    useEffect(getResponse, )

    const router = createBrowserRouter([
        {
            path: "/main",
            element: <MainPage />,
        },
        {
            path: "/countries",
            element: <CountriesPage countries={response} />,
        }
    ]);

    return (
        <div className="rest-countries">
            <Header headers={menus} />

            <RouterProvider router={router} />
        </div>
    );
}