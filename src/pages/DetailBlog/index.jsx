import React from "react";
import { BgRegister } from "../../assets";
import { Link, Gap } from "../../components";
import { useNavigate } from "react-router-dom";
import "./style.css";

const DetailBlog = () => {
   const navigate = useNavigate();

   return (
      <div className="detail-blog-wrapper">
         <img
            src={BgRegister}
            alt="img-blog-detail"
            className="img-blog-detail"
         />
         <p className="blog-title">title blog</p>
         <p className="blog-author">author - date post</p>
         <p className="blog-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque
            laboriosam voluptas tenetur voluptate et. Id fuga error eos?
            Deserunt recusandae reprehenderit provident voluptas ex quasi
            suscipit modi sunt. Explicabo!
         </p>
         <Gap height={20} />
         <Link title="Back to home page" onClick={() => navigate("/")} />
      </div>
   );
};

export default DetailBlog;
