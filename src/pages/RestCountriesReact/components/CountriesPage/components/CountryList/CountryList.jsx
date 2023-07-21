import { useContext } from "react";
import { CountryListContext } from "../../../../RestCountriesReact"

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Country } from "./components/Country/Country"

import "./style.sass"

export const CountryList = () => {

    const countryList = useContext(CountryListContext);

    return (<>
        <div className="search">
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={
                    countryList.map(
                        country => {
                            return {
                                label: country?.data?.name?.official
                            }
                        }
                    )
                }
                sx={{ width: "80%", margin: "0 auto", bgcolor: "white", border:"none", borderRadius: "15px" }}
                renderInput={(params) => <TextField {...params} label="Countries" />}
            />
        </div>
        <div className="country-list">
            {countryList?.map((country, index) => <Country key={index} country={country} />)}
        </div>
    </>
    )
}