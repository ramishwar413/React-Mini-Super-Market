import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import P1 from "../Imgs/logo.jpg";
import fru from "../Imgs/fru.jpg";
import veg1 from "../Imgs/veg1.jpg";
import  dry1 from "../Imgs/dry1.jpg";
import "../Styles/HomeStyles.css"
const About = () => {
  return (
    <Layout>
      <Box sx={{my:1, backgroundColor:"lightblue", color:"yellow", textAlign: "center", p: 2, "& h4":
         {
            fontWeight: "bold",
            my:2,
            fontSize: "1.5rem",
          },
          
          "@media (max-width:600px)": {
            mt: 0,
          "& h4 ": {
            fontSize: "1.5rem",
          },
          },
        }}
        >
        <img className="about1" src ={P1} alt=""/>
        <Typography className="h4" variant="h4">Welcome To Galaxy Super Market </Typography>
        <div className="about2">
            <img src={fru} alt="" />
            <img src={veg1} alt="" />
            <img src={dry1} alt="" />
        </div>
      </Box>
    </Layout>
  );
};

export default About;