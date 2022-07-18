import React, { useEffect } from "react";
import { BlogItem, Button, Gap } from "../../components";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setDataNews } from "../../config/redux/action";

const Home = () => {
   const navigate = useNavigate();

   const { news } = useSelector((state) => state.homeReducer);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(setDataNews());
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
            {news.map((data) => {
               return (
                  <BlogItem
                     key={data._id}
                     title={data.title}
                     author={data.author.name}
                     desc={data.desc}
                     img={data.image}
                     date={data.createdAt}
                  />
               );
            })}
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
