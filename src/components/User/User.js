import React from 'react';
import './User.css'
import users from '../../users';
import { useNavigate, useParams } from 'react-router-dom';



const User = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
    navigate(`/${id}/details`)
    }
  return (
    <div className='users'>
        <div>
      <h3 style={{color:'#615f5f'}}>Candidate</h3>
      {
        users.map((user) => (
            <div className='name' key={user.id}>
                <h3 onClick={()=>handleClick(user.id)}>{user.name}</h3>
                <h5>{user.email}</h5>

            </div>
        ))
      }

      </div>
      <div>
      <h3 style={{color:'#615f5f'}}>Score</h3>
      {
        users.map((user) => (
            <div className='name-2' key={user.id}>
                
                <h3 style={{color: `${user.score > '50' ? "#0cab41" : "#d9d20b"}`}}>{user.score}</h3>
                <br />
                <br />
            </div>
        ))
      }
      
      </div>
    </div>
  )
}

export default User
