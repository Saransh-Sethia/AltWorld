import React from "react";
import "./Navbar.css";
import ZoomOutMapSharpIcon from "@mui/icons-material/ZoomOutMapSharp";
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import AddIcon from '@mui/icons-material/Add';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-heading">
        <ZoomOutMapSharpIcon className="heading-icon" />
        <p className="heading">Hi, AltWorld</p>
      </div>
      <div className="dashboard">
<CottageRoundedIcon className="home-icon"/>
<h4>Dashboard</h4>
      </div>

      <div className="new-assignment">
<AddIcon className="add-icon" />
<h4 style={{color:'#ffffff'}}>New Assignment?</h4>
<p style={{color:"#ffffff"}}>Select from predefind questions <div>to have a quick turnaround</div></p>
<div className="button">Create New Assignment</div>
      </div>
    </div>
  );
};

export default Navbar;
