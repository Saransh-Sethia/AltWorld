import React, { useEffect, useState } from 'react';
import './Assignment.css';
import axios from 'axios';
import config from '../../config';

import CreateIcon from '@mui/icons-material/Create';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import User from '../User/User';

const Assignment = () => {
  const [details, setDetails] = useState([]);

  const fetchData = async() => {
    try{
      const response = await axios.get(`${config.endpoint}`);
      const result = response.data;
      console.log('result',result);
      setDetails(result)
    } catch(error){
      console.log('error', error);
    }
  };

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className='assignment'>
      <h4>Sales BDE</h4>
      <div className='assignment-grid'>
      <div>
        <h2>Sales BDE</h2>
        <h3 style={{color:'#68696b'}}>Assignment Link</h3>
        <h3 style={{color:'#68696b'}}>Assignment Hour</h3>
        <h3 style={{color:'#68696b'}}>Assignment Ends at</h3>
      </div>
      <div className='table-2'>
        <h2 style={{color:'#056e09'}}>Active <span><CreateIcon className='create-icon' /></span></h2>
        <h3 style={{color:'#0a06d6'}}><a>https//:tiny.url/asknakdna</a></h3>
        <h3 style={{color:'#68696b'}}>3 hours</h3>
        <h3 style={{color:'#68696b'}}>11 March 2024</h3>
      </div>
      <div className='button-div'>
<button className='button-2'>
    <ViewInArIcon className='icon-2'/>
    <h4>To Review</h4>
    </button>
    <button className='button-2'>
    <FileCopyIcon className='icon-2'/>
    <h4>Shortlisted</h4>
    </button>
    </div>
  
      </div>
      <User details={details} />
    </div>
  )
}

export default Assignment
