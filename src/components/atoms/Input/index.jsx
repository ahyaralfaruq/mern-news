import React from "react";
import "./style.css";

const Input = ({ label, ...rest }) => {
   return (
      <div className="input-upde-wrapper">
         <input placeholder={label} {...rest} />
      </div>
   );
};

export default Input;
