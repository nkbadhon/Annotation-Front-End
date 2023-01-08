import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Context/AuthProvider';
import myImage from './../../../../../assets/Annotator.png';

function Navbar(props) {


    const { onToggleDarkMode } = props;
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

        <li className="rounded-lg"><Link to='/faq'>FAQ</Link></li>
        <li className="rounded-lg"><button onClick={onToggleDarkMode}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
        </button></li>



    </React.Fragment >
    return (
        <div className="navbar">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                {/* Logo */}
                <img className="w-10 pl-2 mr-0 pr-0 rounded" src={myImage} alt="Brain" />
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