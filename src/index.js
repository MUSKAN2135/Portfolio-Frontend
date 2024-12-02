import React from 'react';
import ReactDOM from 'react-dom/client';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { ToastContainer } from 'react-toastify';
import App from './app';
import 'react-toastify/dist/ReactToastify.css';
import 'react-circular-progressbar/dist/styles.css';
import './index.css'
Aos.init({
  offset: 200, 
  duration: 1500,
  easing: 'ease-in-out',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
        <App />
        <ToastContainer/>
  </>
);
