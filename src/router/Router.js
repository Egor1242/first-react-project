import { createBrowserRouter, Navigate } from "react-router-dom";

import { RestCountriesReact } from '../pages/RestCountriesReact/RestCountriesReact';
import { CountryList } from "../pages/RestCountriesReact/components/CountriesPage/components/CountryList"
import { CurrentCountry } from "../pages/RestCountriesReact/components/CountriesPage/components/CurrentCountry";
import { MainPage } from "../pages/RestCountriesReact/components/MainPage"
import { CountriesPage } from "../pages/RestCountriesReact/components/CountriesPage"
import { AboutUs } from "../pages/RestCountriesReact/components/AboutUs";

export const router = createBrowserRouter([
    {
      path:"/",
      element: <Navigate to="/first-react-project" />
    },
    {
      path: "/first-react-project",
      element: <RestCountriesReact />,
      children:
        [
          {
            path: "",
            element: <MainPage />,
          },
          {
            path: "countries",
            element: <CountriesPage />,
            children: [
              {
                path: "all",
                element: <CountryList />
              },
  
              {
                path: ":currentCountry",
                element: <CurrentCountry />
              }
            ]
          },
          {
              path:"aboutUs",
              element: <AboutUs/>
          }
        ]
    }
  ]);