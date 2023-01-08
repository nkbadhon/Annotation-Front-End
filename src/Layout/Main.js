import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Home/Shared/Footer/Footer';
import Navbar from '../Pages/Home/Home/Shared/Navbar/Navbar';

const Main = () => {

    // DarkMode
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    // DarkMode end




    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <Navbar onToggleDarkMode={toggleDarkMode}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;