import { useContext } from "react";
import {CountryListContext} from "../../../../RestCountriesReact"

import { Country } from "./components/Country/Country"

import "./style.sass"

export const CountryList = () => {

    const countryList = useContext(CountryListContext);

    return (
        <div className="country-list">
            {countryList?.map((country, index) => <Country key={index} country={country} />)}
        </div>
    )
}