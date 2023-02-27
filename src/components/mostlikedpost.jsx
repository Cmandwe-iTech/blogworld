import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
const arr = [
    {
      data: "Data",
      date: "12/07/2021",
      likes: 10,
    },
    {
      data: "Invoice",
      date: "12/07/2019",
      likes: 5,
    },
    {
      data: "Steel Arkansas",
      date: "5/3/2020",
      likes: 8,
    },
    {
      data: "Connecticut",
      date: "13/7/2021",
      likes: 15,
    },
    {
      data: "Leaverage Ball Checking Account",
      date: "4/6/2022",
      likes: 8,
    },
  ];
  
const MostLike=()=>{
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(arr);
      }, []);
    return(
        <div className="div1">
        {data.map((items, i) => {
          return (
            <div className="postdata">
                <table>
                    <tr>
                    <Link to="/post"><td>{items.data}</td></Link> 
                    <Link to="/post"><td>{items.date}</td></Link> 
                    <Link to="/post"><td>Likes: {items.likes}</td></Link>
                    </tr>
                </table>
            </div>
          );
        })}
        </div>
    )
}
export default MostLike;