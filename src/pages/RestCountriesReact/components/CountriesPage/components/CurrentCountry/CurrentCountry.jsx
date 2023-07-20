import { placeLanguagesIntoHtml } from "../../../../../../utility/placeLanguagesIntoHtml"
import { placeCurrenciesIntoHtml } from "../../../../../../utility/placeCurrenciesIntoHtml"
import { placeBordersIntoHtml } from "../../../../../../utility/placeBordersIntoHtml"
import { placeContinentsIntoHtml } from "../../../../../../utility/placeContinentsIntoHtml"
import { setZoomScale } from "../../../../../../utility/setZoomScale"
import { useParams } from "react-router-dom"
import { useContext } from "react";
import { CountryListContext } from "../../../../RestCountriesReact"

import { GoogleMapCustom } from "../../../../../../components/GoogleMap"
import { ColorChange } from "./components/ColorChange/ColorChange"

import "./style.sass"


export const CurrentCountry = () => {

    const countryList = useContext(CountryListContext);

    const { currentCountry } = useParams();

    let currentCountryData = countryList?.find(country => country?.id === currentCountry)?.data;

    console.log(currentCountryData)

    return (
        <>
            <div className="current-country">
                <ColorChange></ColorChange>
                <div className="current-country__title">{currentCountryData?.name?.common}</div>
                <div className="sections">
                    <div className="left-section">
                        <div className="current-country-info">
                            <div className="left-info-section">

                                <div className="flag-frame">
                                    <img className="flag-img" alt="" src={currentCountryData?.flags?.png}></img>
                                </div>

                                <div>
                                    Capital: {currentCountryData?.capital || "-"}
                                </div>
                                <div>
                                    Area: {currentCountryData?.area} <span className="km-square">km</span>
                                </div>
                                <div>
                                    Population: {currentCountryData?.population} citizens.
                                </div>
                                <div>
                                    Languages: {placeLanguagesIntoHtml(currentCountryData?.languages) || "-"}
                                </div>
                                <div>
                                    Currencies: {placeCurrenciesIntoHtml(currentCountryData?.currencies) || "-"}
                                </div>
                                <div>
                                    Timezone: {currentCountryData?.timezones.length > 0 && currentCountryData?.timezones[0]}
                                </div>
                                <div>
                                    Independence: {currentCountryData?.independent ? "Independent" : "Dependent"}
                                </div>
                                <div>
                                    Borders: {placeBordersIntoHtml(currentCountryData?.borders, countryList) || "-"}
                                </div>
                            </div>
                            <div className="right-info-section">
                                <div className="coat-of-arms">
                                    {
                                        currentCountryData?.coatOfArms &&
                                            Object.values(currentCountryData?.coatOfArms)?.length > 0 ?
                                            <img className="coat-img" alt="" src={currentCountryData?.coatOfArms?.png}></img> :
                                            ""
                                    }
                                </div>
                                Continents: <span>{placeContinentsIntoHtml(currentCountryData?.continents)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="google-map">
                            <GoogleMapCustom currentZoom={setZoomScale(currentCountryData?.area)} currentCenter={currentCountryData?.latlng} />
                            <div className="open-street-maps">
                                OpenStreetMaps: <span><a href={currentCountryData?.maps.openStreetMaps || false}>{currentCountryData?.maps.openStreetMaps || false}</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};