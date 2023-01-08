import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-4  h-44 border rounded-lg ">
            <div className="grid grid-flow-col gap-4">
                <Link href="/" className="text-lg">About us</Link>
                <Link href="/" className="text-lg">Contact</Link>

            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <Link to=""> <FaFacebook /> </Link>
                    <Link to=""> <FaTwitter /> </Link>
                    <Link to=""> <FaInstagram /> </Link>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by Annotator</p>
            </div>
        </footer>

    );
};

export default Footer;