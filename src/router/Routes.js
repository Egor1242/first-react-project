export const Routes = {
    Home: "first-react-project/",
    Countries: "first-react-project/countries/all",
    AboutUs: "first-react-project/aboutUs",
    CurrentCountry(currentCountryID) {
        return `/first-react-project/countries/${currentCountryID}`
    }
}