import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'aos/dist/aos.css';
// import Aos from 'aos';
import { ToastContainer } from 'react-toastify';
import App from './app';
import 'react-toastify/dist/ReactToastify.css';
import 'react-circular-progressbar/dist/styles.css';
import './index.css'
// Aos.init({
//   offset: 200, // Adjust the offset as needed
//   duration: 1200, // Adjust the duration as needed
//   easing: 'ease-in-out', // Adjust the easing as needed
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
        <App />
        <ToastContainer/>
  </>
);
