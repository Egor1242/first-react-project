import { useContext, useState } from "react";
import { CountryListContext } from "../../../../RestCountriesReact"
import { setRightSearchResult } from "../../../../../../utility/setRightSearchResult";

import { Country } from "./components/Country"
import { Filters } from "./components/Filters";
import { Search } from "./components/Search";

import "./style.sass"

export const CountryList = () => {

    const countryList = useContext(CountryListContext);

    const [currentSearchResult, setCurrentSearchResult] = useState("");

    let searchedCountryList = setRightSearchResult(countryList, currentSearchResult);

    console.log(countryList)

    return (
        <>
            <Search currentSearchResult={currentSearchResult} setCurrentSearchResult={setCurrentSearchResult} />
            <div className="filter">
                <Filters />
            </div>
            <div className="country-list">
                {
                    searchedCountryList?.map((country, index) => <Country key={index} country={country} />)
                }
            </div>
        </>
    )
}