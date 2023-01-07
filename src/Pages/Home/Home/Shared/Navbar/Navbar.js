import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Context/AuthProvider';



function Navbar() {

    const [darkMode, setDarkMode] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const menuItems = <React.Fragment>
        <li className="rounded-lg"><Link to='/'>Home</Link></li>
        {user?.uid ?
            <>
                <li className="rounded-lg"><Link to='/dashboard'>Dashboard</Link></li>
                <li className="rounded-lg"><button onClick={handleSignOut} >SignOut</button></li>
            </>
            : <>
                <li className="rounded-lg"><Link to='/signin'>SignIn</Link></li>
                <li className="rounded-lg"><Link to='/signup'>SignUp</Link></li>
            </>
        }

        <li className="rounded-lg"><Link to='/blog'>FAQ</Link></li>
        <li className="rounded-lg"><button onClick={() => setDarkMode(!darkMode)}>
            Toggle Dark Mode
        </button></li>


    </React.Fragment >
    return (
        <div className="navbar ">
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
    );
};

export default Navbar;