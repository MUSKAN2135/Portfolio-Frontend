import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaKey, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ Email: '', Password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/Loginuser", formData);
      navigate('/DevSphere');
      console.log(response)
      toast.success('login successfully')
    } catch (error) {
      toast.error('login failed')
      setError('Login failed. Please check your Email and Password.');
      setSuccess('');
      console.log(error.message);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="border-t-8 border-yellow-500">
      <div className="flex flex-col items-center justify-center mt-24 px-4">
        <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-md"> {/* Set max width and padding */}
          <h2 className="mb-6 text-center text-2xl font-semibold">Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              {error && <div className="mb-4 p-3 bg-red-500 text-white rounded">{error}</div>}
              {success && <div className="mb-4 p-3 bg-green-500 text-white rounded">{success}</div>}
              <div className="mb-6"> {/* Increased bottom margin */}
                <label className="py-2 block font-medium">Email</label>
                <div className="flex items-center">
                  <div className="p-3 bg-yellow-500 text-white rounded-l">
                    <FaUser />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                </div>
              </div>
              <div className="mb-6 relative"> {/* Added margin and width adjustments */}
                <label className="py-2 block font-medium">Password</label>
                <div className="flex flex-row items-center justify-center relative">
                  <div className="p-3 bg-yellow-500 text-white rounded-l flex items-center">
                    <FaKey />
                    </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    name="Password"
                    value={formData.Password}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <div
                    onClick={togglePasswordVisibility}
                    className="px-3 py-2 cursor-pointer absolute right-0 top-1/2 flex justify-center items-center transform -translate-y-1/2"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6"> {/* Added margin */}
                <button
                  type="submit"
                  className="w-full max-w-xs py-2 bg-yellow-500 text-white rounded font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <div className="text-center mt-6"> {/* Increased top margin */}
            Don't have an account?
            <button
              className="text-blue-600 underline ml-1"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
