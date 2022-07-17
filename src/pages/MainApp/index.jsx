import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";
import "./style.css";

const MainApp = () => {
   return (
      <div className="main-app-wrapper">
         <Header />
         <div className="content-wrapper">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default MainApp;
