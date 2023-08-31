export const setRightFilterResult = (countryList, currentFilterResult) => {

    return countryList.filter(
        (country) => {
            // let isValid = false;
            // if (currentFilterResult.carSide === "both") isValid = true;
            // else {
            //     if (currentFilterResult.carSide === country?.data?.car?.side) isValid = true;
            //     else return false
            // }
            // if (currentFilterResult.continents.includes(country?.data?.continents)) isValid = true;
            // else return false

            // if (currentFilterResult.landlocked === "both") isValid = true;
            // else {
            //     if (currentFilterResult.landlocked === country?.data?.landlocked) isValid = true;
            //     else return false
            // }
            // if (currentFilterResult.independent === "both") isValid = true;
            // else {
            //     if (currentFilterResult.independent === country?.data?.independent) isValid = true;
            //     else return false
            // }

            // if(isValid) 
            return true
        }
    )
}