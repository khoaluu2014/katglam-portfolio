import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import Hero from './components/Hero';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Nav/>
        <Hero/>
        <About/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
