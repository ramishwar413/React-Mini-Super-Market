import React from 'react';
import Layout from "./../components/Layout/Layout";
import Footer from '../components/Layout/Footer';
import { Link } from "react-router-dom";
import homelogo from "../Imgs/homelogo.jpg";
import "../Styles/HomeStyles.css";
const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage: `url(${homelogo})`}}>
          <Link to="/Home"></Link>
        </div>
        <Footer/>
    </Layout>
    
  );
};

export default Home;