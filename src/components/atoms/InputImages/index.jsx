import React from "react";
import { BgLogin } from "../../../assets";
import "./style.css";

const InputImages = () => {
   return (
      <div className="input-img-wrapper">
         <img src={BgLogin} alt="img-preview" className="img-preview" />
         <input type="file" />
      </div>
   );
};

export default InputImages;
