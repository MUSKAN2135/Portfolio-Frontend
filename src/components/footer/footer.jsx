
import { FaAngleUp, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Copyright from './copyright/copyright';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import './footer.css'
export function Footer() {
    const [msgdata, setmsgdata] = useState({
        YourName: '',
        YourPhone: '',
        YourEmail: '',
        YourMessage: '',
    });
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setmsgdata({ ...msgdata, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/api/v1/sendContactMessage", msgdata);
            toast.success('Successfully send your feedback')
            console.log(response)
        } catch (error) {
            toast.error('Something went wrong')
            console.log(error.message);
        }
    };
    return (
        <section className="relative">
            <div className="relative py-4 bg-yellow-500">
                <div className="contactbg absolute right-0 left-0 z-[1] inset-0"></div>
                <footer className="relative z-[3] text-gray-800 text-center py-10">
                    <div className="w-full text-center pt-3 px-5">
                        <h4 className="pt-3 text-3xl font-mono">Contact Me</h4>
                        <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-lg flex flex-col justify-center items-center w-full max-w-lg mx-auto">
                            <label className="block w-full">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-yellow-500 rounded"
                                    name="YourName"
                                    value={msgdata.YourName}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className="block w-full">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-yellow-500 rounded"
                                    name="YourEmail"
                                    value={msgdata.YourEmail}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className="block w-full">
                                <input
                                    type="tel"
                                    placeholder="Your Phone"
                                    className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-yellow-500 rounded"
                                    name="YourPhone"
                                    value={msgdata.YourPhone}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className="block w-full">
                                <textarea
                                    rows="5"
                                    placeholder="Your Message"
                                    className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-yellow-500 rounded"
                                    name="YourMessage"
                                    value={msgdata.YourMessage}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="w-full bg-yellow-500 text-white py-3 px-10 hover:bg-yellow-600 transition-colors duration-200 rounded">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Contact Details */}
                </footer>
            </div>
            <div className="pt-2 px-3 text-center icons relative z-20">
                <div className="flex justify-center pt-3">
                    <div className="md:w-7/12">
                        <div className="flex justify-around">
                            <div>
                                <h6 className="text-blue-900 text-md">Email</h6>
                                <p className="text-sm">Muskkaan24@gmail.com</p>
                            </div>
                            <div>
                                <h6 className="text-blue-900 text-md">Contact Me</h6>
                                <p className="text-sm">03015128480</p>
                            </div>
                            <div>
                                <h6 className="text-blue-900 text-md">Address</h6>
                                <p className="text-sm">Lahore Cantt, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full border-t border-gray-300 mt-5"></div>
                <div className="flex justify-between items-center p-3">
                    <Copyright />
                    <div className="flex justify-center md:w-1/2">
                        <a href="https://github.com/" className="mx-3 text-blue-900 text-xl"><FaGithub /></a>
                        <a href="https://www.instagram.com/" className="mx-3 text-blue-900 text-xl"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/" className="mx-3 text-blue-900 text-xl"><FaLinkedin /></a>
                        <a href="https://www.whatsapp.com/" className="mx-3 text-blue-900 text-xl"><FaWhatsapp /></a>
                        <a href="https://www.facebook.com" className="mx-3 text-blue-900 text-xl"><FaFacebook /></a>
                    </div>
                </div>
                <FaAngleUp
                    onClick={scrollToTop}
                    className="cursor-pointer z-[1] border border-gray-500 rounded-full p-1 text-blue-900 text-4xl text-light fixed bottom-4 right-4 bg-transparent shadow-lg hover:bg-gray-100"
                />
            </div>
        </section >


    );
}