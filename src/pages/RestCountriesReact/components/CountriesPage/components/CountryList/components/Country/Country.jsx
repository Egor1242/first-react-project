import { Link } from "react-router-dom"
import { Routes } from "../../../../../../../../router"

import { placeLanguagesIntoHtml } from "../../../../../../../../utility/placeLanguagesIntoHtml"
import { placeCurrenciesIntoHtml } from "../../../../../../../../utility/placeCurrenciesIntoHtml"
import { placeContinentsIntoHtml } from "../../../../../../../../utility/placeContinentsIntoHtml"

import "./style.sass"

export const Country = ({ country }) => {

    let countryData = country.data;

    return (
        <div className="country">
            <div className="country__title">
                <Link to={`${Routes.CurrentCountry(country.id)}`}>
                    {countryData?.name?.official}
                </Link>
            </div>
            <div className="flag">
                <img className="flag-img" alt="" src={countryData?.flags?.png}></img>
            </div>
            <div className="country-info">
                <div>
                    <span className="country-property">Capital:</span> {countryData?.capital || "-"}
                </div>
                <div>
                    <span className="country-property">Area:</span> {countryData?.area} <span className="km-square">km</span>
                </div>
                <div>
                    <span className="country-property">Population:</span> {countryData?.population} citizens.
                </div>
                <div>
                    <span className="country-property">Languages:</span> <span>{placeLanguagesIntoHtml(countryData?.languages) || "-"}</span>
                </div>
                <div>
                    <span className="country-property">Currencies:</span> <span>{placeCurrenciesIntoHtml(countryData?.currencies) || "-"}</span>
                </div>
                <div>
                    <span className="country-property">Continents:</span> <span>{placeContinentsIntoHtml(countryData?.continents) || "-"}</span>
                </div>
                <div>
                    <span className="country-property">Independence:</span> <span>{countryData?.independent ? "Independent" : "Dependent"}</span>
                </div>
            </div>
        </div>
    )
}