import * as React from "react";

import "./style.sass";

export function Header({ headers }) {
    return (
        <div className='header-wrapper'>
            {
                headers?.map((header, index) => {
                    return (
                        <div key={index} className="header">
                            <a href={`/${header[0]}`} >
                                {header[1]}
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}