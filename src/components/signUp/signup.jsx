import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
  const [formData, setFormData] = useState({
    First_Name: '',
    Last_Name: '',
    Email: '',
    Password: ''
  });
  const [showPassword, setShowPassword] = useState(false);


  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/SignupUser", formData);
      navigate("/login");
      console.log(response.data);
      toast.success('Signup successfully!');
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        toast.error(error.response.data.message || 'Email already exist!');
      }
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className=" border-t-8 border-yellow-500 p-5 px-8">
      <div className="flex justify-center w-full items-center my-10">
        <div className="md:w-96 w-full p-5 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-center text-2xl font-semibold">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block mb-1 font-medium">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                name="First_Name"
                value={formData.First_Name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-5">
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                name="Last_Name"
                value={formData.Last_Name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-5">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-5">
              <label className="block mb-1 font-medium">Password</label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  name="Password"
                  value={formData.Password}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-l-md"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="px-3 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-md mt-5"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-5">
            If you already have an account?
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="text-blue-600 underline ml-1"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>

  );
};
export default Signup;

