import {React, useState } from "react"
import { createBrowserRouter } from "react-router-dom";
import { CountryList } from "./components/CountryList/CountryList"
import { CurrentCountry } from "./components/CurrentCountry/CurrentCountry"

export const Body = ({ countries }) => {

    const [currentPage, setCurrentPage] = useState("Main");

    // const router = createBrowserRouter([
    //     {
    //         path: "/main",
    //         element: <CountryList countries={countries} />,
    //     },
    //     ...[countries?.map(country => {
    //         return {
    //             path: `./${country?.name?.common}`,
    //             element: <CurrentCountry setCurrentPage={setCurrentPage} countries={countries} currentCountry={country} />
    //         }
    //     })]
    // ]);


    return (
        <div className="main-page__body">
            {
                currentPage === "Main" ?
                    <CountryList setCurrentPage={setCurrentPage} countries={countries} /> :
                    <CurrentCountry setCurrentPage={setCurrentPage} countries={countries} currentCountry={countries.find(country => country?.cca3 === currentPage)} />
            }
             {/* <RouterProvider router={router} /> */}
        </div>
    )
}