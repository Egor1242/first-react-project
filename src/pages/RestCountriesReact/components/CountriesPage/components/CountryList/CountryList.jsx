import { useContext, useState } from "react";
import { CountryListContext } from "../../../../RestCountriesReact"

import { Country } from "./components/Country/Country"
import { Filters } from "./components/Filters";

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
            <input
                value={currentSearchResult}
                onChange={(event) => setCurrentSearchResult(event.target.value)}
                placeholder="Введите название страны, которую ищете"
            />
        </div>
        <div className="filter">
            <Filters />
        </div>
        <div className="country-list">
            {searchedCountryList?.map((country, index) => <Country key={index} country={country} />)}
        </div>
    </>
    )
}