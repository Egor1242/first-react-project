import React, { useState } from 'react';

import { Body } from "./components/Body"

import "./style.css";


export function CountriesPage({countries}) {

    console.log(countries);

    return (
        <div className='countries-page'>
            
            <Body countries={countries} />
        </div>
    )
}