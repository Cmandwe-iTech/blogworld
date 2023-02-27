import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { BlogContext } from "../context/createcontext";
import { Link } from "react-router-dom";
import "./header.css";
const Card = () => {
  const { apiData, setProfileData } = useContext(BlogContext);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    let arr = apiData.filter((item, i) => {
      return i < 9 * count && i >= 9 * (count - 1);
    });
    setData(arr);
  }, [apiData,count]);
  // console.log(data);
  const ProfileHandler = (e) => {
    let tempData = JSON.parse(e.target.value);
    setProfileData(tempData);
  };
  return (
    <div className="container">
      <div className="flex">
      {data.map((item, i) => {
        return (
          <div className="users" key={i}>
            <p>{item.name}</p>
            <Link to={"/profile"}>
              <button
                value={JSON.stringify({ name: item.name, phone: item.phone })}
                onClick={ProfileHandler}
              >
                Click here to view
              </button>
            </Link>
          </div>
        );
      })}
      </div>
      <div className="page">
      <button onClick={()=>{setCount(count-1)}}>prev</button><button>{count}</button><button onClick={()=>{setCount(count+1)}}>next</button>
      </div>
    </div>
  );
};
export default Card;
