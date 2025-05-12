import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import BrowserRouter here
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import AboutMe from './pages/AboutMe';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/Add-Recipe' element={<AddRecipe />} />
                {/* <Route path='/About-Me' element={<AboutMe />} /> */}

            </Routes>
        </Router>
    );
}

export default App;
