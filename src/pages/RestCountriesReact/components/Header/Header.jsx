import * as React from "react";
import {Link} from "react-router-dom"

import "./style.sass";

export function Header({ headers }) {
    return (
        <div className='header-wrapper'>
            {
                headers?.map((header, index) => {
                    return (
                        <div key={index} className="header">
                            <Link to={`/${header[0]}`} >
                                {header[1]}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}