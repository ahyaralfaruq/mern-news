import React from "react";
import "./style.css";

const TextArea = ({ ...rest }) => {
   return (
      <div className="input-textarea-wrapper">
         <textarea {...rest}></textarea>
      </div>
   );
};

export default TextArea;
