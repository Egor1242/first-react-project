import { Country } from "./components/Country/Country"

import "./style.sass"

export const CountryList = ({ countries, setCurrentPage }) => {
    return (
        <div className="country-list">
            {countries?.map((country, index) => <Country setCurrentPage={setCurrentPage} key={index} country={country} />)}
        </div>
    )
}