import React from 'react';

import { Body } from "./components/Body"

import "./style.css";


export function CountriesPage({ response }) {

    let countries = response?.response;

    return (
        <div className='main-page'>
            <Body countries={countries} />
        </div>
    )
}