import React from 'react';

import "./style.css";

export function Header({ headers, setCurrentTab }) {
    return (
        <div className='header-wrapper'>
            {
                headers?.map((header, index) => <h1 key={index} onClick={() => setCurrentTab(header[0])} className='header'>{header[1]}</h1>)
            }
        </div>
    )
}