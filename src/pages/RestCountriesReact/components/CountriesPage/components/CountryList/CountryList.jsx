import { useContext, useState } from "react";
import { CountryListContext } from "../../../../RestCountriesReact"

import { Country } from "./components/Country/Country"

import "./style.sass"

export const CountryList = () => {

    const countryList = useContext(CountryListContext);

    const [currentSearchResult, setCurrentSearchResult] = useState("");

    let searchedCountryList = countryList.filter(country => country
        ?.data
        ?.name
        ?.official
        ?.toLowerCase()
        ?.includes(currentSearchResult?.toLowerCase()))

    return (<>
        <div className="search">
            <input onChange={ (event) => setCurrentSearchResult(event.target.value)} />
        </div>
        <div className="country-list">
            {searchedCountryList?.map((country, index) => <Country key={index} country={country} />)}
        </div>
    </>
    )
}