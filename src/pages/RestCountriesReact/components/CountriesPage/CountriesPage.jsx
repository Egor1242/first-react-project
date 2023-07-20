import React from 'react';

import { Outlet } from 'react-router-dom';

import "./style.sass";



export function CountriesPage() {
    return (
        <div className='countries-page'>
            <Outlet />
        </div>
    )
}