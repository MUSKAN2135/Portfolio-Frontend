import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/v1/resetpasswordlink', { email });
            console.log(response.data)
            setMessage('Password reset link sent to your email.');
            setError('');
            toast.success("Reset Link send to your registered email")
        } catch (error) {
            setError('Failed to send reset link. Please check the email and try again.');
            setMessage('');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-blue-500">
            <div className="bg-white p-6 shadow-md rounded-lg" style={{ width: '300px' }}>
                <h3 className="text-center text-lg font-semibold mb-4">Forgot Password</h3>
                {message && <div className="bg-green-100 text-green-700 p-2 rounded mb-3">{message}</div>}
                {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-3">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                            id="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded w-full mt-2"
                    >
                        Forgot Password
                    </button>
                </form>
            </div>
        </div>

    );
};

export default ForgotPassword;
