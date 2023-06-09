import React, { useState } from 'react';
import { ApiConnect } from '../../services/ApiConnect';

import { Body } from "./components/Body"

import "./style.css";


export function CountriesPage() {

    const [response, setResponse] = useState({});

    const getResponse = () => {
        ApiConnect.sendRequest().then((response) => setResponse(response));
    }

    console.log(response);

    return (
        <div className='main-page'>
            <button className="refresher" onClick={getResponse}>Refresh</button>
            <Body countries={response.response} />
        </div>
    )
}