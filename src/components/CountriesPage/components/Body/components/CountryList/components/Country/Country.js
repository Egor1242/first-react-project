import { placeLanguagesIntoHtml } from "../../../../../../../../utility/placeLanguagesIntoHtml"
import { placeCurrenciesIntoHtml } from "../../../../../../../../utility/placeCurrenciesIntoHtml"

import "./style.css"

export const Country = ({ country, setCurrentPage }) => {

    return (
        <div className="country">
            <div className="country__title" onClick={() => setCurrentPage(country?.name?.common)}>{country?.name?.common}</div>
            <div className="flag">
                <img className="flag-img" alt="" src={country?.flags?.png}></img>
            </div>
            <div className="country-info">
                <div className="country__capital">
                    Capital: {country?.capital}
                </div>
                <div className="country__area">
                    Area: {country?.area} <span className="km-square">km</span>
                </div>
                <div className="country__area">
                    Population: {country?.population} citizens.
                </div>
                <div className="country__languages">
                    Languages: <span>{placeLanguagesIntoHtml(country?.languages)}</span>
                </div>
                <div className="country__languages">
                    Currencies: <span>{placeCurrenciesIntoHtml(country?.currencies)}</span>
                </div>
                <div className="country__languages">
                    Timezone: <span>{country?.timezones.length > 0 && country?.timezones[0]}</span>
                </div>
                <div className="country__independent">
                    Independence: <span>{country?.independent ? "Independent" : "Dependent"}</span>
                </div>
            </div>
        </div>
    )
}