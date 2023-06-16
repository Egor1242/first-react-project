import { useState } from "react"
import { CountryList } from "./components/CountryList/CountryList"
import { CurrentCountry } from "./components/CurrentCountry/CurrentCountry"

export const Body = ({ countries }) => {

    const [currentPage, setCurrentPage] = useState("Main");

    return (
        <div className="main-page__body">
            {
                currentPage === "Main" ?
                    <CountryList setCurrentPage={setCurrentPage} countries={countries} /> :
                    <CurrentCountry setCurrentPage={setCurrentPage} currentCountry={countries.find(country => country?.name?.common === currentPage)} />
            }
        </div>
    )
}