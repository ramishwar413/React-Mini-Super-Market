import React, {useState} from 'react';
import logo from "../../Imgs/logo.jpg";
import {Typography, Toolbar, AppBar, Box, IconButton, Drawer, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import "../../Styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  //handle menu
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer =(
    <Box onClick={handleDrawerToggle} sx ={{ textAlign: "center"}}>
      <Typography color ={"goldenrod"} variant="6" component="div" sx={{flexGrow:1, my:2}} ></Typography>
          <Divider/>
          <ul className="mobile-navigation">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/menu'}>Menu</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact Us</Link>
            </li>
          </ul>
      </Box>
  );
  return (
    <>
    <Box>
      <AppBar component ={"nav"} sx={{bgcolor: "black"}}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2, display:{sm: "none"}, }} 
            onClick={handleDrawerToggle} >
          <MenuIcon/>
          </IconButton>
          <div className="HeaderDiv">
            <img className="headerIcon" src={logo} alt=""/>
            <Typography color ={'goldenrod'} variant='h6' component='div' sx={{flexGrow:1, fontSize:"25px"}} > Galaxy Super Market </Typography>
          </div>
          <Box sx={{display:{xs:'none', sm:'block'}}}>
          <ul className="navigation-menu">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/menu'}>Menu</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact Us</Link>
            </li>
          </ul>
        </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer variant="temporary" open={mobileOpen}
         onClose={handleDrawerToggle}
          sx={{display:{xs:'block', sm:"none"}, "& .MuiDrawer-paper": {boxSizing: "border-box", width: "240px",},
          }}>
          {drawer}
        </Drawer>
      </Box>
      <Toolbar/>
    </Box>
    </>
  );
};


export default Header;