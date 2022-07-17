import React, { useEffect } from "react";
import { BlogItem, Button, Gap } from "../../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Home = () => {
   const navigate = useNavigate();

   useEffect(() => {
      axios
         .get("http://localhost:2909/v1/news/get")
         .then((result) => {
            console.log(result.data);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <section className="home-page">
         <div className="create-wrapper">
            <Button
               title="Create Blog"
               onClick={() => navigate("/create-blog")}
            />
         </div>
         <Gap height={20} />
         <div className="content-news">
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
         </div>
         <div className="item-pagination">
            <Button title="Previous" />
            <Gap width={20} />
            <Button title="Next" />
         </div>
         <Gap height={20} />
      </section>
   );
};

export default Home;
