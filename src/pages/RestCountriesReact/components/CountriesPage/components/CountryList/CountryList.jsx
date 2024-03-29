import { useContext, useState } from "react";

import { filtersConstants } from '../../../../../../constants/filtersConstants';
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
    const [currentFilterValues, setCurrentFilterValues] = useState({
        carSide: "both",
        continents: [
            ...filtersConstants
                ?.continents
                ?.map(
                    continent => continent?.en
                )
        ],
        landlocked: "both",
        independent: "both"
    }
    )

    let searchedCountryList = setRightSearchResult(countryList, currentSearchResult);
    searchedCountryList = setRightFilterResult(searchedCountryList, currentFilterValues);

    return (
        <>
            <Search
                currentSearchResult={currentSearchResult}
                setCurrentSearchResult={setCurrentSearchResult}
            />

            <Filters
                currentFilterValues={currentFilterValues}
                setCurrentFilterValues={setCurrentFilterValues}
            />

            <div className="country-list">
                {
                    searchedCountryList.length > 0 ?
                        searchedCountryList?.map((country, index) => <Country key={index} country={country} />) :
                        <div className="empty-list-label">
                            Нет элементов удовлетворяющих ваш запрос...
                        </div>
                }
            </div>
        </>
    )
}