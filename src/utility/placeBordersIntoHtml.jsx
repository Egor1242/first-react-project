import { fromCca3ToText } from "./fromCca3ToText.jsx";

export const placeBordersIntoHtml = (bordersArray, countries) => {

    if (!bordersArray) return "-";

    let result = [];

    let textBordersArray = fromCca3ToText(bordersArray, countries);

    for (let i = 0; i < bordersArray?.length; i++) {
        let symbol = i === bordersArray?.length - 1 ?
            "." : ", ";

        let elem =
            <>
                <a
                    href={`${bordersArray[i]}`}
                    className="retranslator"
                >
                    {textBordersArray[i]}
                </a>{symbol}
            </>;

        result.push(elem);
    }
    return result;
}