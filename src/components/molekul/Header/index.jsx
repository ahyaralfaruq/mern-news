import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {
   const navigate = useNavigate();

   return (
      <header className="header">
         <p className="logo-name">MERN News</p>
         <p className="menu-item" onClick={() => navigate("/login")}>
            Logout
         </p>
      </header>
   );
};

export default Header;
