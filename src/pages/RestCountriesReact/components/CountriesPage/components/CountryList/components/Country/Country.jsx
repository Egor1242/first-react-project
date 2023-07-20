import { placeLanguagesIntoHtml } from "../../../../../../../../utility/placeLanguagesIntoHtml"
import { placeCurrenciesIntoHtml } from "../../../../../../../../utility/placeCurrenciesIntoHtml"

import "./style.sass"

export const Country = ({ country }) => {

    let countryData = country.data;

    return (
        <div className="country">
            <div className="country__title">
                <a href={`/countries/${country.id}`}>
                    {countryData?.name?.common}
                </a>
            </div>
            <div className="flag">
                <img className="flag-img" alt="" src={countryData?.flags?.png}></img>
            </div>
            <div className="country-info">
                <div>
                    Capital: {countryData?.capital || "-"}
                </div>
                <div>
                    Area: {countryData?.area} <span className="km-square">km</span>
                </div>
                <div>
                    Population: {countryData?.population} citizens.
                </div>
                <div>
                    Languages: <span>{placeLanguagesIntoHtml(countryData?.languages) || "-"}</span>
                </div>
                <div>
                    Currencies: <span>{placeCurrenciesIntoHtml(countryData?.currencies) || "-"}</span>
                </div>
                <div>
                    Timezone: <span>{countryData?.timezones.length > 0 && countryData?.timezones[0]}</span>
                </div>
                <div>
                    Independence: <span>{countryData?.independent ? "Independent" : "Dependent"}</span>
                </div>
            </div>
        </div>
    )
}