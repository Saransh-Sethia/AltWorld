import React, { useState } from "react";
import "./UserDetails.css";
import users from "../../users";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(users);

  return (
    <>
      <div>
        <h2>About</h2>
        <h3 style={{color:'#615f5f'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
          massa sem, ut fringilla lacus condimentum et. Phasellus dignissim ex
          diam, eu imperdiet nulla sagittis sodales. Sed maximus eleifend dolor
          eu accumsan. Phasellus eu finibus risus. Duis sagittis, velit sed
          venenatis dictum, nulla sem volutpat erat, posuere tempus purus orci
          quis libero. Integer ullamcorper justo a metus ornare tristique. Proin
          lobortis erat quam, sit amet malesuada justo suscipit ut.
        </h3>
      </div>
      <br />
      
      <div>
        <h2>Experience</h2>
        <h3 style={{color:'#615f5f'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
          massa sem, ut fringilla lacus condimentum et. Phasellus dignissim ex
          diam, eu imperdiet nulla sagittis sodales. Sed maximus eleifend dolor
          eu accumsan. Phasellus eu finibus risus. Duis sagittis, velit sed
          venenatis dictum, nulla sem volutpat erat, posuere tempus purus orci
          quis libero. Integer ullamcorper justo a metus ornare tristique. Proin
          lobortis erat quam, sit amet malesuada justo suscipit ut.
        </h3>
      </div>
      <br />
      
      <div>
        <h2>Hobbies</h2>
        <h3 style={{color:'#615f5f'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
          massa sem, ut fringilla lacus condimentum et. Phasellus dignissim ex
          diam, eu imperdiet nulla sagittis sodales. Sed maximus eleifend dolor
          eu accumsan. Phasellus eu finibus risus. Duis sagittis, velit sed
          venenatis dictum, nulla sem volutpat erat, posuere tempus purus orci
          quis libero. Integer ullamcorper justo a metus ornare tristique. Proin
          lobortis erat quam, sit amet malesuada justo suscipit ut.
        </h3>
      </div>
      <br />
      
      <div>
        <h2>Introduction</h2>
        <h3 style={{color:'#615f5f'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
          massa sem, ut fringilla lacus condimentum et. Phasellus dignissim ex
          diam, eu imperdiet nulla sagittis sodales. Sed maximus eleifend dolor
          eu accumsan. Phasellus eu finibus risus. Duis sagittis, velit sed
          venenatis dictum, nulla sem volutpat erat, posuere tempus purus orci
          quis libero. Integer ullamcorper justo a metus ornare tristique. Proin
          lobortis erat quam, sit amet malesuada justo suscipit ut.
        </h3>
      </div>
    </>
  );
};

export default UserDetails;
