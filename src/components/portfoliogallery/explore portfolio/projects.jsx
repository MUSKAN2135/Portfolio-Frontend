import React from 'react'
import explore from '../../images/Icon-bg.png';
import codeup from "../../images/codeup.svg"
import coachvan from "../../images/coachvan.svg"
import health from "../../images/healthi.png"
import driver from '../../images/driverfly.png'
import Navbar from '../../navbar/navbar';
import { Footer } from '../../footer/footer';
export function Projects() {
    return (
        <div style={{ borderTop: '8px brown solid' }} className="overflow-hidden">
    <div>
        <Navbar />
    </div>
    <section style={{ width: '100%', height: '100%' }}>
        <div className="mt-3 mb-5 pb-5">
            <div className="relative w-full mt-5" style={{ top: '100px' }}>
                <div className="flex justify-center items-center relative bg-[#AB3045] h-[400px]">
                    <img src={explore} alt="" className="absolute w-full h-full object-cover top-0 left-0 right-0 z-0" />
                    <div className="text-center text-white relative z-10">
                        <h1>Portfolio</h1>
                        <h3>a few of my favourite projects</h3>
                        <p>Over the years I’ve been lucky enough to work with some amazing folks, so grab a cuppa and start browsing!</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center mt-5 mb-3">
                    <a href="https://codeupscale.com/" className="m-2">
                        <img src={codeup} alt="Code Upscale" className="shadow-lg rounded w-[300px] h-[200px] p-[40px]" />
                    </a>
                    <a href="https://healthifi.app/" className="m-2">
                        <img src={health} alt="Healthifi" className="shadow-lg rounded w-[300px] h-[200px] p-[40px]" />
                    </a>
                    <a href="https://www.coachvantage.com/" className="m-2">
                        <img src={coachvan} alt="Coach Vantage" className="shadow-lg rounded w-[300px] h-[200px] p-[40px]" />
                    </a>
                    <a href="https://driverfly.co/" className="m-2">
                        <img src={driver} alt="Driverfly" className="shadow-lg rounded w-[300px] h-[200px] p-[40px]" />
                    </a>
                </div>

                <div className="flex flex-wrap justify-center items-center mb-5">
                    <a href="https://codeupscale.com/" className="m-2">
                        <img src={codeup} alt="Code Upscale" className="shadow-lg rounded w-[300px] h-[200px] p-[40px]" />
                    </a>
                    <a href="https://healthifi.app/" className="m-2">
                        <img src={health} alt="Healthifi" className="shadow-lg rounded w-[300px] h-[200px] p-[40px]" />
                    </a>
                    <a href="https://www.coachvantage.com/" className="m-2">
                        <img src={coachvan} alt="Coach Vantage" className="shadow-lg rounded w-[300px] h-[200px] p-[40px]" />
                    </a>
                    <a href="https://driverfly.co/" className="m-2">
                        <img src={driver} alt="Driverfly" className="shadow-lg rounded w-[300px] h-[200px] p-[40px]" />
                    </a>
                </div>
            </div>
        </div>
    </section>

    <div style={{ borderTop: '1px brown solid', margin: '40px 0' }}>
        <Footer />
    </div>
</div>


    )
};

export default Projects;
