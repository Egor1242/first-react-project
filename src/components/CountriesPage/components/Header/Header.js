import React from 'react';

import "./style.css";

export function Header({ headers }) {
    return (
        <div className='header-wrapper'>
            {
                headers?.map((header, index) => <h1 key={index} className='header'>{header}</h1>)
            }
        </div>
    )
}