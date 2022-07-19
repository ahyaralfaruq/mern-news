import React from "react";
import { BgLogin } from "../../../assets";
import "./style.css";

const InputImages = ({ img, ...rest }) => {
   return (
      <div className="input-img-wrapper">
         {img ? (
            <img src={img} alt="img-preview" className="img-preview" />
         ) : (
            <img src={BgLogin} alt="img-preview" className="img-preview" />
         )}
         <input type="file" {...rest} />
      </div>
   );
};

export default InputImages;
