export const setRightFilterResult = (countryList, currentFilterResult) => {

    return countryList.filter(
        (country) => {

            if (currentFilterResult.carSide === "both") {
            }
            else {
                if (currentFilterResult.carSide === country?.data?.car?.side) {}
                else return false
            }
            if (currentFilterResult.continents.includes(country?.data?.continents[0])) {}
            else return false

            if (currentFilterResult.landlocked === "both") {}
            else {
                if (currentFilterResult.landlocked === country?.data?.landlocked) {}
                else return false
            }
            if (currentFilterResult.independent === "both") {}
            else {
                if (currentFilterResult.independent === country?.data?.independent) {}
                else return false
            }

            return true
        }
    )
}