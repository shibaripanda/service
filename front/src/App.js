import React from "react"
import '../src/styles/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Enter } from "./pages/Enter"
import { Service } from "./pages/Service"
import { MyCamps } from "./pages/MyCamps"

export default function App() {
  return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Enter/> } />
            <Route path="service" element={<Service/>}/>
            <Route path="mycamps" element={<MyCamps/>}/>
            <Route path='*' element={<Enter/>}/>
        </Routes>
      </BrowserRouter>
  )
}
