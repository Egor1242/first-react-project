import { Link } from "react-router-dom"
import { Routes } from "../router"

import { fromCca3ToText } from "./fromCca3ToText.js";

export const placeBordersIntoHtml = (bordersArray, countries) => {

    if (!bordersArray) return "-";

    let result = [];

    let textBordersArray = fromCca3ToText(bordersArray, countries);

    for (let i = 0; i < bordersArray?.length; i++) {
        let symbol = i === bordersArray?.length - 1 ?
            "." : ", ";

        let elem =
            <span key={bordersArray[i]}>
                <Link
                    to={`${Routes.CurrentCountry(bordersArray[i])}`}
                    className="retranslator"
                >
                    {textBordersArray[i]}
                </Link>{symbol}
            </span>;

        result.push(elem);
    }
    return result;
}