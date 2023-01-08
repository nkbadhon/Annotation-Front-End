import React, { useRef, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import '../../../App.css';
import myImage from './../../../assets/Annotator.png';

const Dashboard = () => {

    //  Functions for video
    const [videoUrl, setVideoUrl] = useState(null);
    const [videoColor, setVideoColor] = useState('color');
    const [videoSize, setVideoSize] = useState(1);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const fileUrl = URL.createObjectURL(file);
        setVideoUrl(fileUrl);
    }

    const toggleVideoColor = () => {
        setVideoColor(videoColor === 'color' ? 'gray' : 'color');
    }

    const handleVideoSizeChange = (event) => {
        setVideoSize(event.target.value);
    }
    const closePlayer = () => {
        setVideoUrl(null);
    };
    //  Functions for video end

    // DarkMode
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    // DarkMode end





    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>

            {/* Navbar for dashboard */}
            <div className="navbar bg-base-100 drop-shadow-md	">
                <div className="flex-1">
                    {/* Logo */}
                    <img className="w-10 pl-2 rounded" src={myImage} alt="Brain" />
                    <ul className="btn btn-ghost normal-case text-xl"><Link to='/'>Annotator</Link></ul>
                </div>
                <div className="flex-none pr-3">
                    <ul className="menu p-4 w-60 text-base-content text-center">
                        <ul><p>Welcome <br /> {user?.displayName && <h3>{user.displayName}</h3>}</p></ul>
                    </ul>
                    <ul><button onClick={toggleDarkMode}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    </button>
                    </ul>
                    <button className="btn btn-square btn-ghost">
                        <label htmlFor="my-drawer-4" className="drawer-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                        </svg>
                        </label>
                    </button>

                </div>
            </div>
            {/* Navbar for dashboard end */}

            <main>

                {/* drawer */}
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">

                        {/* import a video */}
                        <div className="text-center mt-20">

                            {videoUrl ? (
                                <div className=''>
                                    {/* Frame */}

                                    {/* Frame end */}



                                    <button className='btn btn-outline' onClick={closePlayer}>Close player</button>

                                    {/* Change color to graystyle */}
                                    <button onClick={toggleVideoColor} className="btn btn-outline m-2">Change Color</button>

                                    {/* Window resize  */}
                                    <button className='btn btn-outline'>
                                        <label htmlFor="video-size" className='m-2'>Window Size:</label>

                                        <input
                                            type="range"
                                            id="video-size"
                                            min="1"
                                            max="1.2"
                                            step="0.1"
                                            value={videoSize}
                                            onChange={handleVideoSizeChange}
                                            className="mb-2"
                                        />
                                    </button>




                                    <div className='flex justify-center'>
                                        <video
                                            src={videoUrl}
                                            style={{ filter: videoColor === 'gray' ? 'grayscale(100%)' : 'none' }}
                                            muted
                                            width={`${videoSize * 50}%`}
                                            controls
                                        />
                                    </div>
                                    <br />


                                </div>
                            ) : (
                                <div>
                                    <input type="file" accept="video/*" onChange={handleFileChange} />
                                </div>
                            )}
                        </div>
                        {/* import a video end */}

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                            <li> <Link to='/'>Exit to Home</Link> </li>
                            <li> <Link>Upload</Link> </li>
                            <li> <Link>Annotation</Link> </li>
                            <li> <Link>Configuration</Link> </li>
                            <li> <Link>Preferences</Link> </li>
                            <li> <Link>Help</Link> </li>

                            <li> <Link>Sign Out</Link> </li>

                        </ul>
                    </div>
                </div>
                {/* drawer-2 end */}




            </main>
        </div>
    );
};

export default Dashboard;