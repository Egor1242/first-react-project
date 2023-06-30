export const fromCca3ToText = (cca3BordersArray, countryList) => {
    let textBordersArray = cca3BordersArray.map(
        (border) => {
            return countryList.find(country => country?.cca3 == border)?.name?.common
        }
    )
    return textBordersArray;
}