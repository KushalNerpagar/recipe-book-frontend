import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/Add-Recipe' element={<AddRecipe />} />
            </Routes>
        </Router>
    );
}

export default App;
