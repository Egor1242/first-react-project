import { React } from "react"
import {  RouterProvider } from "react-router-dom";

import {router} from "../router/Router"

import './App.sass';

export function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}