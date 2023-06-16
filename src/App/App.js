import { useState } from 'react';
import { menus } from "../constants/menus"

import { Header } from '../components/Header';
import { CountriesPage } from '../pages/CountriesPage';
import { MainPage } from '../pages/MainPage';

import './App.css';

export function App() {

  const [currentPage, setCurrentPage] = useState("main");

  return (
    <div className="App">
      <div className="wrapper">
        <Header headers={menus} setCurrentPage={setCurrentPage} />

        {currentPage === "main" && <MainPage />}
        {currentPage === "countries" && <CountriesPage />}
      </div>
    </div>
  );
}