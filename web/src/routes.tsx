import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';


const Rotes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    element={<Home />}
                    path="/"
                />
                <Route
                    element={<CreatePoint />}
                    path="/create-point"
                />
            </Routes>
        </BrowserRouter>


    );
}

export default Rotes;