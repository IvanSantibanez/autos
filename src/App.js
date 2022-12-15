import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import {AutoPage, HomePage, GaleriaPage} from "./pages";

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={<HomePage/>}/>
            <Route path ="/Auto" element={<AutoPage/>}/>
            <Route path ="/Galeria" element={<GaleriaPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;