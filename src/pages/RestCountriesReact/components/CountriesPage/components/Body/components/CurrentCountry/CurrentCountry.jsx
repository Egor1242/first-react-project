import { placeLanguagesIntoHtml } from "../../../../../../../../utility/placeLanguagesIntoHtml"
import { placeCurrenciesIntoHtml } from "../../../../../../../../utility/placeCurrenciesIntoHtml"
import { placeBordersIntoHtml } from "../../../../../../../../utility/placeBordersIntoHtml"
import { placeContinentsIntoHtml } from "../../../../../../../../utility/placeContinentsIntoHtml"
import { setZoomScale } from "../../../../../../../../utility/setZoomScale"

import { GoogleMapCustom } from "../../../../../../../../components/GoogleMap"
import { ColorChange } from "./components/ColorChange/ColorChange"

import "./style.sass"

export const CurrentCountry = ({ currentCountry, setCurrentPage, countries }) => {
    return (
        <>
            <button className="cancel" onClick={() => setCurrentPage("Main")}>{"<"}</button>
            <div className="current-country">
                <ColorChange></ColorChange>
                <div className="current-country__title">{currentCountry?.name?.common}</div>
                <div className="sections">
                    <div className="left-section">
                        <div className="current-country-info">
                            <div className="left-info-section">

                                <div className="flag-frame">
                                    <img className="flag-img" alt="" src={currentCountry?.flags?.png}></img>
                                </div>

                                <div>
                                    Capital: {currentCountry?.capital || "-"}
                                </div>
                                <div>
                                    Area: {currentCountry?.area} <span className="km-square">km</span>
                                </div>
                                <div>
                                    Population: {currentCountry?.population} citizens.
                                </div>
                                <div>
                                    Languages: {placeLanguagesIntoHtml(currentCountry?.languages) || "-"}
                                </div>
                                <div>
                                    Currencies: {placeCurrenciesIntoHtml(currentCountry?.currencies) || "-"}
                                </div>
                                <div>
                                    Timezone: {currentCountry?.timezones.length > 0 && currentCountry?.timezones[0]}
                                </div>
                                <div>
                                    Independence: {currentCountry?.independent ? "Independent" : "Dependent"}
                                </div>
                                <div>
                                    Borders: {currentCountry?.borders && placeBordersIntoHtml(currentCountry?.borders, setCurrentPage, countries) || "-"}
                                </div>
                            </div>
                            <div className="right-info-section">
                                <div className="coat-of-arms">
                                    {
                                        Object.values(currentCountry?.coatOfArms).length > 0 ?
                                            <img className="coat-img" alt="" src={currentCountry?.coatOfArms?.png}></img> :
                                            ""
                                    }
                                </div>
                                Continents: <span>{placeContinentsIntoHtml(currentCountry?.continents)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="google-map">
                            <GoogleMapCustom currentZoom={setZoomScale(currentCountry?.area)} currentCenter={currentCountry?.latlng} />
                            <div className="open-street-maps">
                                OpenStreetMaps: <span><a href={currentCountry?.maps.openStreetMaps || false}>{currentCountry?.maps.openStreetMaps || false}</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};