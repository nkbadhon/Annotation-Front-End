import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    // Declaring a state variable for the dark mode setting
    const [darkMode, setDarkMode] = useState(false)

    // Toggle the dark mode setting when the button is clicked
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const menuItems = <React.Fragment>
        <li className="rounded-lg"><Link to='/'>Home</Link></li>
        <li className="rounded-lg"><Link to='/signin'>SignIn</Link></li>
        <li className="rounded-lg"><Link to='/signup'>SignUp</Link></li>
        <li className="rounded-lg"><Link to='/blog'>FAQ</Link></li>
        {/* {user?.uid ?
            <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><button onClick={logout Handle} >Log Out</button></li>
            </>
            : <li><Link to='/login'>Login</Link></li>
} */}

    </React.Fragment >
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Annotator</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className=" menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
        // <nav className={darkMode ? 'dark-mode' : 'light-mode'}>
        //     <h1>Annotator</h1>
        //     <button onClick={toggleDarkMode}>
        //         {darkMode ? 'Light Mode' : 'Dark Mode'}
        //     </button>
        // </nav>
    );
};

export default Navbar;