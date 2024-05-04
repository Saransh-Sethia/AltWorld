import React from 'react';
import './Dashboard.css';
import Navbar from '../Navbar/Navbar';
import Assignment from '../Assignment/Assignment';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Navbar />
      <Assignment />
    </div>
  )
}

export default Dashboard
