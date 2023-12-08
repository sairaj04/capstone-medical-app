import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_Page from './Components/Landing_Page/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Landing_Page/LandingPage';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Landing_Page/>}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;