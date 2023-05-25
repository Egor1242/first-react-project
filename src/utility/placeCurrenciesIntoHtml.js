export const placeCurrenciesIntoHtml = (currenciesObject) => {
    let currenciesArray = Object.values(currenciesObject || {});
    let result = "";
    
    for (let i in currenciesArray) {

        result += `${currenciesArray[i]?.name} ${"symbol" in currenciesArray[i] ? `(${currenciesArray[i]?.symbol})` : ""}`;
        if (i < currenciesArray.length - 1) {
            result += `, `;
        }
        else {
            result += `.`;
        }

    }
    return result;
}