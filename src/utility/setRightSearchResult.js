export const setRightSearchResult = (countryList, currentSearchResult) => {

    if(currentSearchResult === "") return countryList;

    let resultCountryList = [];
    let countryListStartsWith = countryList.filter(
        (country) => {
            return country?.data?.name?.official?.toLowerCase()?.startsWith(currentSearchResult?.toLowerCase())
        }
    )
    let countryListIncludes = countryList.filter(
        (country) => {
            return country?.data?.name?.official?.toLowerCase()?.includes(currentSearchResult?.toLowerCase())
        }
    )
    let countryListCapitalIncludes = countryList.filter(
        (country) => {
            return country?.data?.capital?.[0]?.toLowerCase()?.includes(currentSearchResult?.toLowerCase())
        }
    )
    

    resultCountryList = [...new Set([...countryListStartsWith,...countryListIncludes, ...countryListCapitalIncludes])]

    return resultCountryList;
}