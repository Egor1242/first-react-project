import { placeLanguagesIntoHtml } from "../../../../../../utility/placeLanguagesIntoHtml"
import { placeCurrenciesIntoHtml } from "../../../../../../utility/placeCurrenciesIntoHtml"
import { GoogleMapCustom } from "../../../../../GoogleMap/GoogleMapCustom";

import "./style.css"

export const CurrentCountry = ({ currentCountry, setCurrentPage, }) => {

    return (
        <>
            <button className="cancel" onClick={() => setCurrentPage("Main")}>{"<"}</button>
            <div className="current-country">
                <div className="current-country__title">{currentCountry?.name?.common}</div>
                <div className="sections">
                    <div className="left-section">
                        <div className="flags">
                            <div className="flag">
                                <img className="flag-img" alt="" src={currentCountry?.flags?.png}></img>
                            </div>
                            <div className="Coat-of-Arms">
                                {
                                    Object.values(currentCountry?.coatOfArms).length > 0 ?
                                        <img className="flag-img" alt="" src={currentCountry?.coatOfArms?.png}></img> :
                                        ""
                                }
                            </div>
                        </div>
                        <div className="current-country-info">
                            <div className="current-country__capital">
                                Capital: {currentCountry?.capital}
                            </div>
                            <div className="current-country__area">
                                Area: {currentCountry?.area} <span className="km-square">km</span>
                            </div>
                            <div className="current-country__area">
                                Population: {currentCountry?.population} citizens.
                            </div>
                            <div className="current-country__languages">
                                Languages: <span>{placeLanguagesIntoHtml(currentCountry?.languages)}</span>
                            </div>
                            <div className="current-country__languages">
                                Currencies: <span>{placeCurrenciesIntoHtml(currentCountry?.currencies)}</span>
                            </div>
                            <div className="current-country__languages">
                                Timezone: <span>{currentCountry?.timezones.length > 0 && currentCountry?.timezones[0]}</span>
                            </div>
                            <div className="current-country__independent">
                                Independence: <span>{currentCountry?.independent ? "Independent" : "Dependent"}</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <GoogleMapCustom currentCountry={currentCountry.common} />
                    </div>
                </div>
            </div>
        </>
    )
};