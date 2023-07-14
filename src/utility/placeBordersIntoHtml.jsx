import { fromCca3ToText } from "./fromCca3ToText.jsx";

export const placeBordersIntoHtml = (bordersArray, setCurrentPage, countries) => {
    let result = [];

    let textBordersArray = fromCca3ToText(bordersArray, countries);

    for (let i = 0; i < bordersArray?.length; i++) {
        let symbol = i === bordersArray?.length - 1 ?
            "." : ", ";

        let elem =
            <>
                <a
                    to={`/${bordersArray[i]}`}
                    className="retranslator"
                    onClick={() => setCurrentPage(bordersArray[i])}>
                    {textBordersArray[i]}
                </a>{symbol}
            </>;

        result.push(elem);
    }
    return result;
}