import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFormNews, setImgPrev, postToAPI } from "../../config/redux/action";
import {
   Input,
   Button,
   InputImages,
   TextArea,
   Gap,
   Link,
} from "../../components";
import { useNavigate } from "react-router-dom";
import "./style.css";

const CreateBlog = () => {
   const { formNews, imgPrev } = useSelector(
      (state) => state.createNewsReducer
   );
   const { title, desc } = formNews;
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const onUploadImg = (e) => {
      const file = e.target.files[0];
      dispatch(setFormNews("image", file));
      dispatch(setImgPrev(URL.createObjectURL(file)));
   };

   const onSubmit = () => {
      postToAPI(formNews);
   };

   return (
      <div className="create-blog-wrapper">
         <Link title="back to home page" onClick={() => navigate("/")} />
         <p className="blog-title">Create News</p>
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
            <Button title="Save" />
         </div>
      </div>
   );
};

export default CreateBlog;
