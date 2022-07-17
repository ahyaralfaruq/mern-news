import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, MainApp, Register } from "../../pages";
import CreateBlog from "../../pages/CreateBlog";
import Home from "../../pages/Home";
import DetailBlog from "../../pages/DetailBlog";

const ConfRoutes = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<MainApp />}>
               <Route path="/create-blog" element={<CreateBlog />} />
               <Route path="/detail-blog" element={<DetailBlog />} />
               <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
         </Routes>
      </Router>
   );
};

export default ConfRoutes;
