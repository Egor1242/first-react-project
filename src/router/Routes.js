export const Routes = {
    Home: "first-react-project/",
    Countries: "first-react-project/countries/all",
    CurrentCountry(currentCountryID) {
        return `/first-react-project/countries/${currentCountryID}`
    }
    ,
    AboutUs: "first-react-project/aboutUs"
}