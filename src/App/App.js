import { useEffect, useState } from 'react';
import { menus } from "../constants/menus"
import { ApiConnect } from "../services/ApiConnect"

import { Header } from '../components/Header';
import { CountriesPage } from '../pages/CountriesPage';
import { MainPage } from '../pages/MainPage';

import './App.css';

export function App() {

  const [currentPage, setCurrentPage] = useState("main");
  const [response, setResponse] = useState([]);
  const getResponse = () => ApiConnect.sendRequest().then((response) => setResponse(response));

  useEffect(() => {
    getResponse()
  }
    , [currentPage]);

  return (
    <div className="App">
      <Header headers={menus} setCurrentPage={setCurrentPage} />

      {currentPage === "main" && <MainPage />}
      {currentPage === "countries" && <CountriesPage response={response} />}

    </div>
  );
}