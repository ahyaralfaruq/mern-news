import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setDataNews } from "../../config/redux/action";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";

const Home = () => {
   const navigate = useNavigate();
   const [counter, setCounter] = useState(1);

   const { news, pages } = useSelector((state) => state.homeReducer);
   const dispatch = useDispatch();

   const prev = () => {
      setCounter(counter <= 1 ? 1 : counter - 1);
   };

   const next = () => {
      setCounter(counter === pages.totalPage ? pages.totalPage : counter + 1);
   };

   useEffect(() => {
      dispatch(setDataNews(counter));
   }, [counter, dispatch]);

   const confirmDelete = (id) => {
      confirmAlert({
         title: "Confirm to delete",
         message: "Are you sure to delete this item ?",
         buttons: [
            {
               label: "Yes",
               onClick: () => {
                  axios
                     .delete(`http://localhost:2909/v1/news/post/${id}`)
                     .then((res) => {
                        dispatch(setDataNews(counter));
                     })
                     .catch((err) => console.error(err));
               },
            },
            {
               label: "No",
               // onClick: () => alert("Click No"),
            },
         ],
      });
   };

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
                     _id={data._id}
                     onDelete={confirmDelete}
                  />
               );
            })}
         </div>
         <div className="item-pagination">
            <Button title="Previous" onClick={prev} />
            <Gap width={20} />
            <p className="text-page">
               {pages.currentPage} / {pages.totalPage}
            </p>
            <Gap width={20} />
            <Button title="Next" onClick={next} />
         </div>
         <Gap height={20} />
      </section>
   );
};

export default Home;
