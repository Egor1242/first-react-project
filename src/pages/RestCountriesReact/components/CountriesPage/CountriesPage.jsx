import React from 'react';

import { Body } from "./components/Body"

import "./style.sass";


export function CountriesPage({countries}) {

    console.log(countries);

    return (
        <div className='countries-page'>
            <Body countries={countries} />
        </div>
    )
}