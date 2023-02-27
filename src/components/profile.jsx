import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../context/createcontext";
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

const ProfileCard = () => {
  const { ProfileData } = useContext(BlogContext);
  const [data, setData] = useState([]);
  // console.log(profileData)
  useEffect(() => {
    setData(arr);
  }, []);

  console.log(data);

  return (
    <>
      <div className="prfiledata">
        <h1>{ProfileData.name}</h1>
        <p>Mobile: {ProfileData.phone}</p>
        <h3>Posts:5</h3>
        <h3>Likes : 50</h3>
      </div>
      <div className="post-container">
        <h1>Posts</h1>
        <div className="btn-class">
          <button>Ascending By Date</button>
          <button>Descending By Date</button>
          <button>Ascending By Like</button>
          <button>Descending By Like</button>
        </div>
        {data.map((items, i) => {
          return (
            <div className="postdata">
              <table>
                <tr>
                  <td>{items.data}</td>
                  <td>{items.date}</td>
                  <td>Likes: {items.likes}</td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProfileCard;
