import { useContext, useState } from "react";

import { CountryListContext } from "../../../../RestCountriesReact"
import { setRightSearchResult } from "../../../../../../utility/setRightSearchResult";
import { setRightFilterResult } from "../../../../../../utility/setRightFilterResult";

import { Country } from "./components/Country"
import { Filters } from "./components/Filters";
import { Search } from "./components/Search";

import "./style.sass"

export const CountryList = () => {

    const countryList = useContext(CountryListContext);

    const [currentSearchResult, setCurrentSearchResult] = useState("");
    const [currentFilterResult, setCurrentFilterResult] = useState({});

    let searchedCountryList = setRightSearchResult(countryList, currentSearchResult);
     searchedCountryList = setRightFilterResult(searchedCountryList, currentFilterResult);

    console.log(countryList)


    return (
        <>
            <Search
                currentSearchResult={currentSearchResult}
                setCurrentSearchResult={setCurrentSearchResult}
            />

            <Filters currentFilterResult={currentFilterResult} setCurrentFilterResult={setCurrentFilterResult} />

            <div className="country-list">
                {
                    searchedCountryList?.map((country, index) => <Country key={index} country={country} />)
                }
            </div>
        </>
    )
}