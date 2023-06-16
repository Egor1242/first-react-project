import { useEffect, useState } from 'react';
import { ApiConnect } from "../services/ApiConnect"
import { menus } from "../constants/menus"

import { Header } from '../components/Header';
import { CountriesPage } from '../pages/CountriesPage';
import { MainPage } from '../pages/MainPage';

import './App.css';

export function App() {

  const [currentPage, setCurrentPage] = useState("main");

  const [response, setResponse] = useState([]);

  const getResponse = () => {
    ApiConnect.sendRequest().then((response) => setResponse(response));
  }

  useEffect(() => getResponse(), [currentPage]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header headers={menus} setCurrentPage={setCurrentPage} />

        {currentPage === "main" && <MainPage />}
        {currentPage === "countries" && <CountriesPage response={response} />}
      </div>
    </div>
  );
}