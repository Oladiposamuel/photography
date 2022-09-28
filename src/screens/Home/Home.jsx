import React from 'react';
import "./home.css";
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Hero />
        <Main />
        <Footer />
    </div>
  )
}

export default Home