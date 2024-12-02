import React from 'react';
import codeup from "../images/codeup.svg"
import coachvan from "../images/coachvan.svg"
import health from "../images/healthi.png"
import driver from '../images/driverfly.png'

import { useNavigate } from 'react-router-dom';

export function Gallery() {
    const navigate = useNavigate();
    return (
        <div className="side">
            <div className="lg:flex justify-between flex-wrap items-center lg:px-14 md:px-8 px-2">
                <div className="lg:flex flex-col justify-center lg:items-start md:items-center mt-5 lg:w-1/2 w-full lg:p-0 px-6">
                    <h3 className="text-blue-900 font-mono text-xl font-medium">My Projects</h3>
                    <hr className="w-1/4 my-3 border-yellow-500" />
                    <p className="text-gray-500 my-1 lg:w-full">
                        From intuitive designs to robust functionality, my projects reflect the perfect blend of creativity and technical expertise. Explore how I bring ideas to life.
                    </p>
                    <button
                        className="my-3 bg-blue-900 hover:bg-blue-800 transition-colors duration-200 text-white py-3 px-10"
                        onClick={() => navigate('/projects')}
                    >
                        Explore my Portfolio
                    </button>
                </div>

                {/* Right Content */}
                <div className="flex lg:justify-end flex-wrap justify-center mt-4 lg:w-1/2 w-full">
                <div className='flex justify-center'>
                    <a href="https://codeupscale.com/" className="m-3">
                        <img
                            src={codeup}
                            alt=""
                            className="h-44 w-64 mt-5 px-2 py-10 shadow-lg rounded"
                        />
                    </a>
                    <a href="https://healthifi.app/" className="m-3">
                        <img
                            src={health}
                            alt=""
                            className="h-44 w-64 mt-5 px-2 py-10 shadow-lg rounded"
                        />
                    </a>
                    </div>
                    <div className='flex justify-center'>
                        <a href="https://www.coachvantage.com/" className="m-3">
                            <img
                                src={coachvan}
                                alt=""
                                className="h-44 w-64 mt-5 px-2 py-10 shadow-lg rounded"
                            />
                        </a>
                        <a href="https://driverfly.co/" className="m-3">
                            <img
                                src={driver}
                                alt=""
                                className="h-44 w-64 mt-5 px-2 py-10 shadow-lg rounded"
                            />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};
