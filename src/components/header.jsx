import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <Link to="/">
          <button>JSOM</button>
        </Link>
      </div>
      <div className="right">
        <Link to="/">
          <button>Authors</button>
        </Link>
        <Link to="/mostlikedpost">
          <button>MostLikedPost</button>
        </Link>
        <Link to="/mostcommentpost">
          <button>MostCommentPost</button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
