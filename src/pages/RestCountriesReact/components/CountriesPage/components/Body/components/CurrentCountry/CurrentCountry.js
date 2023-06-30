import { placeLanguagesIntoHtml } from "../../../../../../../../utility/placeLanguagesIntoHtml"
import { placeCurrenciesIntoHtml } from "../../../../../../../../utility/placeCurrenciesIntoHtml"
import { placeBordersIntoHtml } from "../../../../../../../../utility/placeBordersIntoHtml"
import { placeContinentsIntoHtml } from "../../../../../../../../utility/placeContinentsIntoHtml"
import { GoogleMapCustom } from "../../../../../../../../components/GoogleMap"

import "./style.css"

export const CurrentCountry = ({ currentCountry, setCurrentPage, }) => {

    let currentZoom;

    if (currentCountry?.area < 1000) currentZoom = 10
    else if (currentCountry?.area >= 1000 && currentCountry?.area < 10000) currentZoom = 8
    else if (currentCountry?.area >= 10000 && currentCountry?.area < 100000) currentZoom = 6
    else if (currentCountry?.area >= 100000 && currentCountry?.area < 1000000) currentZoom = 5
    else currentZoom = 2

    return (
        <>
            <button className="cancel" onClick={() => setCurrentPage("Main")}>{"<"}</button>
            <div className="current-country">
                <div className="current-country__title">{currentCountry?.name?.common}</div>
                <div className="sections">
                    <div className="left-section">
                        <div className="flags">


                        </div>
                        <div className="current-country-info">
                            <div className="left-info-section">

                                <div className="flag-frame">
                                    <img className="flag-img" alt="" src={currentCountry?.flags?.png}></img>
                                </div>

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
                                    Languages: <span>{placeLanguagesIntoHtml(currentCountry?.languages) || "-"}</span>
                                </div>
                                <div className="current-country__languages">
                                    Currencies: <span>{placeCurrenciesIntoHtml(currentCountry?.currencies) || "-"}</span>
                                </div>
                                <div className="current-country__languages">
                                    Timezone: <span>{currentCountry?.timezones.length > 0 && currentCountry?.timezones[0]}</span>
                                </div>
                                <div className="current-country__independent">
                                    Independence: <span>{currentCountry?.independent ? "Independent" : "Dependent"}</span>
                                </div>
                                <div className="current-country__borders">
                                    Borders: <span>{placeBordersIntoHtml(currentCountry?.borders, setCurrentPage) || "-"}</span>
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
                        <GoogleMapCustom currentZoom={currentZoom} currentCenter={currentCountry?.latlng} />
                        <div className="open-street-maps">
                            OpenStreetMaps: <span><a href={currentCountry?.maps.openStreetMaps || false}>{currentCountry?.maps.openStreetMaps || false}</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};