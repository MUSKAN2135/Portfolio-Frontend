import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-circular-progressbar/dist/styles.css';
import 'aos/dist/aos.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import '@babel/traverse'
import Aos from 'aos';
import { BrowserRouter } from 'react-router-dom';
import Signup from './components/signUp/signup';
import App from './app';

Aos.init({
  offset: 200, // Adjust the offset as needed
  duration: 1200, // Adjust the duration as needed
  easing: 'ease-in-out', // Adjust the easing as needed
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
