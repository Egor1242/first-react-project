import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';

import "./style.sass";

export function DropDownHeader({ headers }) {
    const [dropHeaderHidden, setDropHeaderHidden] = useState(true);

    const switcherOnClick = () => {
        setDropHeaderHidden(!dropHeaderHidden)
    }

    let headerMenuElement = document.querySelector('.header-menu');

    if (headerMenuElement) {
        if (dropHeaderHidden) {
            headerMenuElement.style.transform = 'translate(-100%)'
        }
        else {
            headerMenuElement.style.transform = 'translate(0)'
        }
    }

    return (
        <div className="drop-down">

            <div className="header-switcher" onClick={switcherOnClick} >
                <MenuIcon />
            </div>

            <div className='header-menu'>
                {
                    headers?.map((header, index) => {
                        return (
                            <Link key={index} to={`/${header[0]}`} >
                                <div className="header-menu__item">
                                    {header[1]}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}