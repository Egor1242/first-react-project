import { placeLanguagesIntoHtml } from "../../../../../../../../utility/placeLanguagesIntoHtml"
import { placeCurrenciesIntoHtml } from "../../../../../../../../utility/placeCurrenciesIntoHtml"

import "./style.sass"

export const Country = ({ country }) => {

    let countryData = country.data;

    return (
        <div className="country">
            <div className="country__title">
                <a href={`${country.id}`}>
                    {countryData?.name?.official}
                </a>
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
                <span className="country-property">Timezone:</span> <span>{countryData?.timezones.length > 0 && countryData?.timezones[0]}</span>
                </div>
                <div>
                <span className="country-property">Independence:</span> <span>{countryData?.independent ? "Independent" : "Dependent"}</span>
                </div>
            </div>
        </div>
    )
}