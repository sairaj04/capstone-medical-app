import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import BookingConsultation from './Components/BookingConsultation';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/LandingPage" element={<LandingPage />} />
                    <Route path="/Sign_Up" element={<Sign_Up />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/instant-consultation" element={<InstantConsultation />} />
                    <Route path='/finddoctor' element={<FindDoctorSearch/>}/>
                    <Route path='/search/doctors' element={<BookingConsultation />} />                    
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;