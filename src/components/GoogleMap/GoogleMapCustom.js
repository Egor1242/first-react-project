import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import axios from 'axios';

const API_KEY = "AIzaSyAKlLoPezczIJIEvV9Cv7AEyLHqixRKpiY";

export const GoogleMapCustom = ({currentZoom, currentCountry }) => {

    const containerStyle = {
        width: '100%',
        height: '100%',
    };

    const [center, setCenter] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        const fetchCountryCoordinates = async () => {
            try {

                const response = await axios.get(
                    `https://maps.googleapis.com/maps/api/geocode/json?address=${currentCountry}&key=${API_KEY}`
                );

                const { lat, lng } = response?.data?.results[0]?.geometry?.location;
                    console.log( `lat = ${lat}, lng = ${lng}`)
                setCenter({ lat, lng });
            } catch (error) {
                console.error('Ошибка при получении координат страны:', error);
            }
        };

        fetchCountryCoordinates();
    }, [currentCountry]);

    return (
        <LoadScript googleMapsApiKey={API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={currentZoom}
            />
        </LoadScript>
    );

}