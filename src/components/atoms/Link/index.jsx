import React from "react";
import "./style.css";

const Link = ({ title, onClick }) => {
   return (
      <p className="link" onClick={onClick}>
         {title}
      </p>
   );
};

export default Link;
