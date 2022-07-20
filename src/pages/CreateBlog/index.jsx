import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   setFormNews,
   setImgPrev,
   postToAPI,
   updateToAPI,
} from "../../config/redux/action";
import {
   Input,
   Button,
   InputImages,
   TextArea,
   Gap,
   Link,
} from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import axios from "axios";

const CreateBlog = () => {
   const { formNews, imgPrev } = useSelector(
      (state) => state.createNewsReducer
   );
   const { title, desc } = formNews;
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const getParams = useParams();
   const [isUpdate, setIsUpdate] = useState(false);

   useEffect(() => {
      const id = getParams.id;

      if (id) {
         setIsUpdate(true);
         axios
            .get(`http://localhost:2909/v1/news/get/${id}`)
            .then((res) => {
               const data = res.data.data;
               dispatch(setFormNews("title", data.title));
               dispatch(setImgPrev(`http://localhost:2909/${data.image}`));
               dispatch(setFormNews("desc", data.desc));
            })
            .catch();
      }
   }, [dispatch, getParams]);

   const onUploadImg = (e) => {
      const file = e.target.files[0];
      dispatch(setFormNews("image", file));
      dispatch(setImgPrev(URL.createObjectURL(file)));
   };

   const onSubmit = () => {
      const id = getParams.id;

      if (isUpdate) {
         updateToAPI(formNews, id);
      } else {
         postToAPI(formNews);
      }
   };

   return (
      <div className="create-blog-wrapper">
         <Link title="back to home page" onClick={() => navigate("/")} />
         <p className="blog-title">{isUpdate ? "Update" : "Create"} News</p>
         <Input
            placeholder="Type your title"
            value={title}
            onChange={(e) => dispatch(setFormNews("title", e.target.value))}
         />
         <InputImages onChange={(e) => onUploadImg(e)} img={imgPrev} />
         <TextArea
            placeholder="Type your desc"
            value={desc}
            onChange={(e) => dispatch(setFormNews("desc", e.target.value))}
         />
         <Gap height={20} />
         <div className="button-action" onClick={onSubmit}>
            <Button title={isUpdate ? "Update" : "Save"} />
         </div>
      </div>
   );
};

export default CreateBlog;
