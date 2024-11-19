import React from "react";
import Layout from "../components/Layout/Layout";
import "../Styles/HomeStyles.css";
import r1 from "../Imgs/r1.jpg";
import moong from "../Imgs/Moong.jpg";
import masale from "../Imgs/masale.jpg";
import launch from "../Imgs/laung.jpg";
import jeera from"../Imgs/jeera.jpg"
import chana from "../Imgs/chana.jpg";
import dry from "../Imgs/dry.jpg";
import must from "../Imgs/must.jpg";
import mirchi from "../Imgs/mirch.jpg";
import terme from "../Imgs/terme.jpg";
import apple from "../Imgs/apple.jpg";
import banana from "../Imgs/banana.jpg";
import orange from "../Imgs/orange.jpg";
import grapes from "../Imgs/grapes.jpg";
import guava from "../Imgs/guava.jpg";
import fruit from "../Imgs/fruit1.jpg";
import fruit1 from "../Imgs/fruit2.jpg";
import mango from "../Imgs/mango.jpg";
import nas from "../Imgs/nas.jpg";
import papaya from "../Imgs/papaya.jpg";
import califlower from "../Imgs/cauliflower.jpg";
import potato from "../Imgs/potato.jpg";
import tomato from "../Imgs/tomato.jpg";
import chili from "../Imgs/chilli.jpg";
import bittergourd from "../Imgs/bittergourd.jpg";
import pea from "../Imgs/pea.jpg";
import radish from "../Imgs/radish.jpg";
import shimla from "../Imgs/shimla.jpg";
import onion from "../Imgs/onion.jpg";
import baigan from "../Imgs/baigan.jpg";
const Services = () => {
  return (
    <Layout>
      <div className="Main">
        <div className="f1">
          <div>
            <h1> Sweet Fruits</h1>
          </div>
          <div>
            <img src={grapes} alt="" />
            <img src={guava} alt="" />
            <img src={fruit} alt="" />
            <img src={fruit1} alt="" />
            <img src={mango} alt="" />
          </div>
          <div>
            <img src={apple} alt="" />
            <img src={banana} alt="" />
            <img src={orange} alt="" />
            <img src={nas} alt="" />
            <img src={papaya} alt="" />
          </div>
        </div>
        <div className="f1">
          <div>
            <h1>Homely Vegetables</h1>
          </div>
          <div>
            <img src={califlower} alt="" />
            <img className="khata" src={bittergourd} alt="" />
            <img src={tomato} alt="" />
            <img className="mobile" src={chili} alt="" />
            <img src={potato} alt="" />
          </div>
          <div>
            <img src={pea} alt="" />
            <img className="note" src={radish} alt="" />
            <img src={shimla} alt="" />
            <img src={onion} alt="" />
            <img src={baigan} alt="" />
          </div>
        </div>
        <div className="f1">
          <div>
            <h1> Daily Uses Mesh Products</h1>
          </div>
          <div>
            <img src={r1} alt="" />
            <img src={moong} alt="" />
            <img src={masale} alt="" />
            <img src={launch} alt="" />
            <img src={jeera} alt="" />
          </div>
          <div>
            <img src={chana} alt="" />
            <img src={dry} alt="" />
            <img className=" quiz" src={must} alt="" />
            <img src={mirchi} alt="" />
            <img src={terme} alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
