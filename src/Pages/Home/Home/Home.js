import React from 'react';
import { Link } from 'react-router-dom';
import myImage from './../../../assets/Annotator.png';


const Home = () => {
    return (
        <div className='mx-5 '>

            <div className='flex justify-center'>
                <img className='flex justify-center' src={myImage} alt="Icon" />
            </div>
            <div className='h-80'>
                <h3 className='text-center '>An advanced tool for video annotation. <br /> <Link className='text-cyan-500' to="/signin">SignIn</Link> to get the full feature</h3>


            </div>
        </div>
    );
};

export default Home;