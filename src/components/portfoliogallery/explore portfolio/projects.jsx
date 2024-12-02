import React from 'react'
import codeup from "../../images/codeup.svg"
import coachvan from "../../images/coachvan.svg"
import health from "../../images/healthi.png"
import Navbar from '../../navbar/navbar';
import { Footer } from '../../footer/footer';
import './projects.css'

export function Projects() {
    return (
        <div className="border-t-4 border-yellow-500">
            <div className="myproject h-full w-full">
                <div>
                    <Navbar />
                </div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="lg:w-1/4 md:w-1/2 w-full shadow-2xl border-2 rounded flex flex-col">
                                <a href="https://codeupscale.com/" className="block h-64">
                                    <img alt="ecommerce" className="w-full h-full p-4" src={codeup} />
                                </a>
                                <div className="p-6 bg-blue-800 flex-grow">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">$16.00</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full shadow-2xl border-2 rounded  flex flex-col">
                                <a href="https://www.coachvantage.com/" className="block h-64">
                                    <img alt="ecommerce" className="w-full h-full p-4" src={coachvan} />
                                </a>
                                <div className="p-6 bg-blue-800 flex-grow">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                    <p className="mt-1">$12.00</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full shadow-2xl border-2 rounded  flex flex-col">
                                <a href="https://codeupscale.com/" className="block h-64">
                                    <img alt="ecommerce" className="w-full h-full p-4" src={codeup} />
                                </a>
                                <div className="p-6 bg-blue-800 flex-grow">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                    <p className="mt-1">$18.40</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full shadow-2xl border-2 rounded  flex flex-col">
                                <a href="https://healthifi.app/" className="block h-64">
                                    <img alt="ecommerce" className="w-full h-full p-6" src={health} />
                                </a>
                                <div className="p-6 bg-blue-800 flex-grow">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">$16.00</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full shadow-2xl border-2 rounded  flex flex-col">
                                <a href="https://codeupscale.com/" className="block h-64">
                                    <img alt="ecommerce" className="w-full h-full p-4" src={codeup} />
                                </a>
                                <div className="p-6 bg-blue-800 flex-grow">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                    <p className="mt-1">$21.15</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full shadow-2xl border-2 rounded  flex flex-col">
                                <a href="https://www.coachvantage.com/" className="block h-64">
                                    <img alt="ecommerce" className="w-full h-full p-4" src={coachvan} />
                                </a>
                                <div className="p-6 bg-blue-800 flex-grow">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                    <p className="mt-1">$12.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
};

export default Projects;
