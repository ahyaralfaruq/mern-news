import React from "react";
import "./style.css";

const Button = ({ title, ...rest }) => {
   return (
      <div className="button-all-wrapper">
         <button {...rest}>{title}</button>
      </div>
   );
};

export default Button;
