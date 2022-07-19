import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";

const BlogItem = (props) => {
   const navigate = useNavigate();

   // destructering variable
   const { title, author, date, desc, img, _id } = props;

   return (
      <div className="blog-item-wrapper">
         <img
            src={`http://localhost:2909/${img}`}
            alt="img-thumbs"
            className="img-thumb"
         />
         <div className="content-detail">
            <p className="item-title">{title}</p>
            <p className="item-author">
               {author} - {date}
            </p>
            <p className="item-desc">{desc}</p>
            <Button
               title="View detail"
               onClick={() => navigate(`/detail-blog/${_id}`)}
            />
         </div>
      </div>
   );
};

export default BlogItem;
