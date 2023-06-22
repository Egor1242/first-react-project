import { useEffect, useState } from "react"
import {menus} from "../../constants/menus"
import {ApiConnect} from "../../services/ApiConnect"

import {Header} from "../../components/Header"
import {MainPage} from "./components/MainPage"
import {CountriesPage} from "./components/CountriesPage"

export const RestCountriesReact =() =>{
    const [currentTab, setCurrentTab] = useState("main");
    const [response, setResponse] = useState([]);

    const getResponse = () => {
        ApiConnect.sendRequest().then((response) => setResponse(response.response));
    }
    
    useEffect(getResponse, [currentTab])

    return (
      <div className="rest-countries">
          <Header headers={menus} setCurrentTab={setCurrentTab} />
  
          {currentTab === "main" && <MainPage />}
          {currentTab === "countries" && <CountriesPage countries={response} />}
        </div>
    );
}