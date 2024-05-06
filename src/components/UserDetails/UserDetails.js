import React, { useEffect, useState } from "react";
import "./UserDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../../config";

const UserDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState([]);

  const fetchDetails = async () => {
    try {
      const response = await axios.get(`${config.endpoint}/${id}`);
      const result = response.data;
      const resArr = [];
      resArr.push(result);
      console.log("result2", result);
      setUserDetails(resArr);
    } catch (error) {
      console.log("error-2", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      {userDetails.map((detail) => (
        <div key={detail.id}>
          <div className="heading-1">
            <div className="heading-2">
              <h2>{detail.name}</h2>
              <h4 className="email">{detail.email}</h4>
            </div>
            <h1
              style={{
                color: `${detail.score > "50" ? "#0cab41" : "#d9d20b"}`,
              }}
            >
              {detail.score}
            </h1>
          </div>
          <div>
            <h2>About</h2>
            <h3 style={{ color: "#615f5f" }}>{detail.About}</h3>
          </div>
          <br />

          <div>
            <h2>Experience</h2>
            <h3 style={{ color: "#615f5f" }}>{detail.Experience}</h3>
          </div>
          <br />

          <div>
            <h2>Hobbies</h2>
            <h3 style={{ color: "#615f5f" }}>{detail.Hobbies}</h3>
          </div>
          <br />

          <div>
            <h2>Introduction</h2>
            <h3 style={{ color: "#615f5f" }}>{detail.Introduction}</h3>
          </div>
          <div className="btn-2">Shortlist</div>
        </div>
      ))}
    </>
  );
};

export default UserDetails;
