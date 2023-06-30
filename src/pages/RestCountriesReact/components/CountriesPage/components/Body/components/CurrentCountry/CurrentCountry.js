import { placeLanguagesIntoHtml } from "../../../../../../../../utility/placeLanguagesIntoHtml"
import { placeCurrenciesIntoHtml } from "../../../../../../../../utility/placeCurrenciesIntoHtml"
import { placeBordersIntoHtml } from "../../../../../../../../utility/placeBordersIntoHtml"
import { GoogleMapCustom } from "../../../../../../../../components/GoogleMap"
import { setZoomScale } from "../../../../../../../../utility/setZoomScale"

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
                                Capital: {currentCountry?.capital || "-"}
                            </div>
                            <div className="current-country__area">
                                Area: {currentCountry?.area} <span className="km-square">km</span>
                            </div>
                            <div className="current-country__area">
                                Population: {currentCountry?.population} citizens.
                            </div>
                            <div className="current-country__languages">
                                Languages: {placeLanguagesIntoHtml(currentCountry?.languages) || "-"}
                            </div>
                            <div className="current-country__languages">
                                Currencies: {placeCurrenciesIntoHtml(currentCountry?.currencies) || "-"}
                            </div>
                            <div className="current-country__languages">
                                Timezone: {currentCountry?.timezones.length > 0 && currentCountry?.timezones[0]}
                            </div>
                            <div className="current-country__independent">
                                Independence: {currentCountry?.independent ? "Independent" : "Dependent"}
                            </div>
                            <div className="current-country__borders">
                                Borders: {currentCountry?.borders && placeBordersIntoHtml(currentCountry?.borders, setCurrentPage) || "-"}
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <GoogleMapCustom currentZoom={setZoomScale(currentCountry?.area)} currentCenter={currentCountry?.latlng} />
                    </div>
                </div>
            </div>
        </>
    )
};