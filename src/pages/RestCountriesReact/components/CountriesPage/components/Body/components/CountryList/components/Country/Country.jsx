import { placeLanguagesIntoHtml } from "../../../../../../../../../../utility/placeLanguagesIntoHtml"
import { placeCurrenciesIntoHtml } from "../../../../../../../../../../utility/placeCurrenciesIntoHtml"

import "./style.sass"

export const Country = ({ country, setCurrentPage }) => {

    return (
        <div className="country">
            <div className="country__title" onClick={() => setCurrentPage(country?.cca3)}>{country?.name?.common}</div>
            <div className="flag">
                <img className="flag-img" alt="" src={country?.flags?.png}></img>
            </div>
            <div className="country-info">
                <div>
                    Capital: {country?.capital || "-"}
                </div>
                <div>
                    Area: {country?.area} <span className="km-square">km</span>
                </div>
                <div>
                    Population: {country?.population} citizens.
                </div>
                <div>
                    Languages: <span>{placeLanguagesIntoHtml(country?.languages) || "-"}</span>
                </div>
                <div>
                    Currencies: <span>{placeCurrenciesIntoHtml(country?.currencies) || "-"}</span>
                </div>
                <div>
                    Timezone: <span>{country?.timezones.length > 0 && country?.timezones[0]}</span>
                </div>
                <div>
                    Independence: <span>{country?.independent ? "Independent" : "Dependent"}</span>
                </div>
            </div>
        </div>
    )
}