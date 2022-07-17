import React from "react";
import { IcGithub, IcInstagram, IcWhatsapp, Logo } from "../../../assets";

import "./style.css";

const Icons = ({ img }) => {
   return (
      <div className="icons-wrapper">
         <img src={img} alt="icons" className="img-icons" />
      </div>
   );
};

const Footer = () => {
   return (
      <footer>
         <div className="footer">
            <div>
               <img src={Logo} alt="logo" className="logo" />
            </div>
            <div className="social-wrapper">
               <Icons img={IcWhatsapp} alt="Whatsapp" />
               <Icons img={IcInstagram} alt="Instagram" />
               <Icons img={IcGithub} alt="Github" />
            </div>
         </div>
         <div className="copyright">
            <p>copyright &copy; 2022</p>
         </div>
      </footer>
   );
};

export default Footer;
