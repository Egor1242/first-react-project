import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import axios from 'axios';

const API_KEY = "AIzaSyBrnUyIwzrlPhGbhwlPP9Z9s4S6nIZoCnQ";

export const GoogleMapCustom = ({ currentZoom, currentCenter }) => {

    const containerStyle = {
        width: '100%',
        height: '100%',
    };

    const center = { lat: currentCenter[0], lng: currentCenter[1] };

    console.log(center)
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