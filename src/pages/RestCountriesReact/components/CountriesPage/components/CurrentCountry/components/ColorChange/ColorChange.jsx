import { useState } from "react";

import { colorConstants } from "../../../../../../../../constants/colorConstants";

import "./style.sass"

export const ColorChange = () => {

    const [currentColor, setCurrentColor] = useState(
        {
            color: colorConstants[0],
            number: 0
        }
    )

    const currentCountryElement = document.querySelector(".current-country");

    if (currentCountryElement) {
        currentCountryElement.style.backgroundColor = currentColor.color.backgroundColor;
        currentCountryElement.style.color = currentColor.color.color;
    }
   
    return (
        <div className="color-setup">
            <button className="color-1" onClick={
                () => {
                    if (currentColor?.number < colorConstants.length - 1) {
                        setCurrentColor({
                            color: colorConstants[currentColor?.number + 1],
                            number: currentColor?.number + 1
                        })
                    }
                    else {
                        setCurrentColor({
                            color: colorConstants[0],
                            number: 0
                        })
                    }
                }
            }></button>
        </div >
    )
}