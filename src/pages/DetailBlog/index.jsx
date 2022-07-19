import React, { useEffect, useState } from "react";
import { Link, Gap } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import axios from "axios";

const DetailBlog = () => {
   const navigate = useNavigate();
   const getParams = useParams();
   const [data, setData] = useState({});

   useEffect(() => {
      const id = getParams.id;
      axios
         .get(`http://localhost:2909/v1/news/get/${id}`)
         .then((res) => {
            setData(res.data.data);
         })
         .catch((err) => console.error(err));
   }, [getParams]);

   if (data.author) {
      return (
         <div className="detail-blog-wrapper">
            <img
               src={`http://localhost:2909/${data.image}`}
               alt="img-blog-detail"
               className="img-blog-detail"
            />
            <p className="blog-title">{data.title}</p>
            <p className="blog-author">
               {data.author.name} - {data.createdAt}
            </p>
            <p className="blog-desc">{data.desc}</p>
            <Gap height={20} />
            <Link title="Back to home page" onClick={() => navigate("/")} />
         </div>
      );
   }

   return <h3>Loading...</h3>;
};

export default DetailBlog;
