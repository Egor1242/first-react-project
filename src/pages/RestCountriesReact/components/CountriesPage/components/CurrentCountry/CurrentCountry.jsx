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
                                <div className="flags">
                                    <div className="flag-frame">
                                        <img alt="" src={currentCountryData?.flags?.png}></img>
                                    </div>
                                    {
                                        typeof currentCountryData?.coatOfArms == "object" &&
                                        Object?.values(currentCountryData?.coatOfArms)?.length > 0 &&
                                        <div className="coat-of-arms">
                                            {
                                                Object.values(currentCountryData?.coatOfArms)?.length > 0 ?
                                                    <img alt="" src={currentCountryData?.coatOfArms?.png}></img> :
                                                    ""
                                            }
                                        </div>
                                    }
                                </div>
                                <p>
                                    <span className="country-property">Capital:</span> {currentCountryData?.capital || "-"}
                                </p>
                                <p>
                                    <span className="country-property">Area:</span> {currentCountryData?.area} <span className="km-square">km</span>
                                </p>
                                <p>
                                    <span className="country-property">Population:</span> {currentCountryData?.population} citizens.
                                </p>
                                <p>
                                    <span className="country-property">Languages:</span> {placeLanguagesIntoHtml(currentCountryData?.languages)}
                                </p>
                                <p>
                                    <span className="country-property">Currencies:</span> {placeCurrenciesIntoHtml(currentCountryData?.currencies) || "-"}
                                </p>
                                <p>
                                    <span className="country-property">Timezone:</span> {currentCountryData?.timezones.length > 0 && currentCountryData?.timezones[0]}
                                </p>
                                <p>
                                    <span className="country-property">Independence:</span> {currentCountryData?.independent ? "Independent" : "Dependent"}
                                </p>
                                <p>
                                    <span className="country-property">Borders:</span> {placeBordersIntoHtml(currentCountryData?.borders, countryList)}
                                </p>
                                <p>
                                    <span className="country-property">Continents:</span> {placeContinentsIntoHtml(currentCountryData?.continents)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="google-map">
                            <GoogleMapCustom currentZoom={setZoomScale(currentCountryData?.area)} currentCenter={currentCountryData?.latlng} />
                        </div>
                        <div className="open-street-maps">
                            OpenStreetMaps: <span><a href={`${currentCountryData?.maps?.openStreetMaps}`}>{currentCountryData?.maps?.openStreetMaps}</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};