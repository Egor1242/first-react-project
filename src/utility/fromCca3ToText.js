export const fromCca3ToText = (cca3BordersArray, countryList) => {
    let textBordersArray = cca3BordersArray?.map(
        (border) => {
            return countryList?.find(country => country?.id === border)?.data?.name?.common
        }
    )
    return textBordersArray;
}