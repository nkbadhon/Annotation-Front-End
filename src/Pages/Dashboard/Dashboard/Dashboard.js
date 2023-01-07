import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Footer from '../../Home/Home/Shared/Footer/Footer';
import Navbar from '../../Home/Home/Shared/Navbar/Navbar';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>

            <Navbar></Navbar>
            <ul className="menu p-4 w-60 text-base-content">
                <ul><p>Welcome, <br /> {user?.displayName && <h3>{user.displayName}</h3>}</p></ul>

            </ul>
            <main>

            </main>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;