import React, { useState } from 'react'

function Navbar() {
    // Declare a state variable for the dark mode setting
    const [darkMode, setDarkMode] = useState(false)

    // Toggle the dark mode setting when the button is clicked
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <nav className={darkMode ? 'dark-mode' : 'light-mode'}>
            <h1>Annotator</h1>
            <button onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </nav>
    );
};

export default Navbar;