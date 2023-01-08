import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import '../../../App.css';

const Dashboard = () => {

    //  Functions for video
    const [videoUrl, setVideoUrl] = useState(null);
    const [videoColor, setVideoColor] = useState('color');
    const [videoSize, setVideoSize] = useState(1);
    const [muted, setMuted] = useState(false);
    const toggleMute = () => {
        setMuted((prev) => !prev);
    };

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

    //  Functions for video end


    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>

            {/* Navbar for dashboard */}
            <div className="navbar bg-base-100 drop-shadow-md	">
                <div className="flex-1">
                    <ul className="btn btn-ghost normal-case text-xl">Annotator</ul>
                </div>
                <div className="flex-none">
                    <ul className="menu p-4 w-60 text-base-content text-center">
                        <ul><p>Welcome <br /> {user?.displayName && <h3>{user.displayName}</h3>}</p></ul>

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
                                <div className='App'>

                                    <button onClick={toggleVideoColor} className="btn btn-outline">Toggle Color</button>

                                    <br />

                                    <label htmlFor="video-size">Video Size:</label>

                                    <input
                                        type="range"
                                        id="video-size"
                                        min="1"
                                        max="2"
                                        step="0.1"
                                        value={videoSize}
                                        onChange={handleVideoSizeChange}
                                    />

                                    <div className='flex justify-center'>
                                        <video
                                            src={videoUrl}
                                            style={{ filter: videoColor === 'gray' ? 'grayscale(100%)' : 'none' }}
                                            muted
                                            width={`${videoSize * 40}%`}
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
                            <li></li>
                        </ul>
                    </div>
                </div>
                {/* drawer-2 end */}




            </main>
        </div>
    );
};

export default Dashboard;