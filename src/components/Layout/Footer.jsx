import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from '@mui/material';
import "../../Styles/FooterStyles.css";
const Footer = () => {
  return (
   <Box className='bottom-box'>
    <Box sx={{ textAlign:"center", bgcolor:"#1A1A19", color: "white", p:3, "& h2":{color:"green"}}}>
    <div className="bottom-content">
    </div>
    <Box sx={{ my: 3, "& svg":{fontSize:"60px", curser:"poiter", mr:2},
              "& svg:hover":{ color:'goldenrod', tranform: 'translateX(5px)', 
              transition:'all 400ms',}}}>
         {/* Icons */}
         <InstagramIcon/>
         <TwitterIcon/>
         <GitHubIcon/>
         <YouTubeIcon/>
    </Box>
       <Typography variant="h5" sx={{"@media (max-width:600px)":{fontSize:"1rem"}}}>
         <div className="wrap"> &copy; Galaxy Super Market All Right Reseverd</div>
       </Typography>
   </Box>
  </Box>
   
  )
}

export default Footer