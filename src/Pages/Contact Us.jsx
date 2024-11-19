import React from "react";
import Layout from "./../components/Layout/Layout";
import "../Styles/HomeStyles.css";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import open from "../Imgs/open.png";
import cont from "../Imgs/cont.jpg";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
const Contact = () => {
  return (
    <Layout className="contactback">
      <img src={open} className="Contactimage" alt="" />
      <Box
        sx={{
          my: 2,
          ml: 2,
          "& h4": {
            fontSize: "28px",
            fontweight: "bold",
            backgroundColor: "rgb(255, 0, 51)",
            width: "fit-content",
            height: "fit-content",
            position: "relative",
            left: "710px",
            color: "yellow",
            borderRadius: "15px",
          },

          "& p": { fontSize: "17px", color: "blue", fontFamily: "sans-serif" },
        }}
      >
        <Typography className="content" variant="h4">Contact Our Services </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "20px",
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer
          component={Paper}
          style={{ display: "flex", backgroundColor: "grey" }}
        >
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white", fontSize: "23px" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ color: "yellow", fontSize: "20px", p: "2px" }}>
                  <div className="iconList">
                  <SupportAgentIcon
                    sx={{ color: "greenyellow", pt: 1, fontSize: "60px" }}
                  />
                  support@supermarket.in
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: "yellow", fontSize: "20px", p: "2px" }}>
                 <div className="iconList">
                 <MailIcon
                    sx={{ color: "skyblue", pt: 1, fontSize: "60px" }}
                  />{" "}
                  ramishwar808@gmail.com
                 </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: "yellow", fontSize: "20px", p: "2px", alignItems:"Center" }}>
                <div className="iconList">
                  <CallIcon sx={{ color: "green", pt: 1, fontSize: "60px" }} />{" "}
                  +91 9793576011
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <img src={cont} className="cust" alt="" />
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
