import React from "react";
import "./style.css";
import { BgRegister } from "../../../assets";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";

const BlogItem = () => {
   const navigate = useNavigate();

   return (
      <div className="blog-item-wrapper">
         <img src={BgRegister} alt="img-thumbs" className="img-thumb" />
         <div className="content-detail">
            <p className="item-title">title</p>
            <p className="item-author">author - date post</p>
            <p className="item-desc">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
               odit, repellat eaque laudantium quae neque hic itaque, ad
               assumenda alias repellendus fugiat doloremque numquam, omnis
               nesciunt et quasi odio magni!
            </p>
            <Button
               title="View detail"
               onClick={() => navigate("/detail-blog")}
            />
         </div>
      </div>
   );
};

export default BlogItem;
