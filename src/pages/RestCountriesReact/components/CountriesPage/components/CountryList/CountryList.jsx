import { useContext, useState } from "react";
import { CountryListContext } from "../../../../RestCountriesReact"

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Country } from "./components/Country/Country"

import "./style.sass"

export const CountryList = () => {

    const countryList = useContext(CountryListContext);

    const [currentSearchResult, setCurrentSearchResult] = useState("");

    let searchedCountryList = countryList.filter(country => country
        ?.data
        ?.name
        ?.official
        ?.toLowerCase()
        ?.includes(currentSearchResult.toLowerCase()))

    return (<>
        <div className="search">
            <Autocomplete
                freeSolo
                id="combo-box-demo"
                options={
                    countryList?.map(
                        country => {
                            return {
                                label: country?.data?.name?.official
                            }
                        }
                    )
                }
                sx={{ width: "80%", margin: "0 auto", bgcolor: "white", border: "none" }}
                renderInput={(params) =>
                    <TextField
                        onChange={() => setCurrentSearchResult(document.querySelector("#combo-box-demo")?.value)}
                        value={currentSearchResult}
                        {...params}
                        label="Countries"
                    />
                }
            />
        </div>
        <div className="country-list">
            {searchedCountryList?.map((country, index) => <Country key={index} country={country} />)}
        </div>
    </>
    )
}