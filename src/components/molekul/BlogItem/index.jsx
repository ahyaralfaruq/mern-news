import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";

const BlogItem = (props) => {
   const navigate = useNavigate();

   // destructering variable
   const { title, author, date, desc, img, _id, onDelete } = props;

   return (
      <div className="blog-item-wrapper">
         <img
            src={`http://localhost:2909/${img}`}
            alt="img-thumbs"
            className="img-thumb"
         />
         <div className="content-detail">
            <div className="title-wrapper">
               <p className="item-title">{title}</p>
               <div className="menu-wrapper">
                  <p
                     className="edit"
                     onClick={() => navigate(`/create-blog/${_id}`)}
                  >
                     Edit
                  </p>
                  <p className="delete" onClick={() => onDelete(_id)}>
                     Delete
                  </p>
               </div>
            </div>
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
