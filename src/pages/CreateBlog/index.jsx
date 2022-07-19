import React, { useState } from "react";
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
import axios from "axios";

const CreateBlog = () => {
   const navigate = useNavigate();
   const [title, setTitle] = useState("");
   const [img, setImg] = useState("");
   const [desc, setDesc] = useState("");
   const [imgPrev, setImgPrev] = useState(null);

   const onUploadImg = (e) => {
      const file = e.target.files[0];
      setImg(file);
      setImgPrev(URL.createObjectURL(file));
   };

   const onSubmit = () => {
      const sendData = new FormData();

      sendData.append("title", title);
      sendData.append("image", img);
      sendData.append("desc", desc);

      axios
         .post(`http://localhost:2909/v1/news/post`, sendData, {
            headers: {
               "content-type": "multipart/form-data",
            },
         })
         .then((res) => console.log(res))
         .catch((err) => console.error(err));
   };

   return (
      <div className="create-blog-wrapper">
         <Link title="back to home page" onClick={() => navigate("/")} />
         <p className="blog-title">Create News</p>
         <Input
            placeholder="Type your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <InputImages onChange={(e) => onUploadImg(e)} img={imgPrev} />
         <TextArea
            placeholder="Type your desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
         />
         <Gap height={20} />
         <div className="button-action" onClick={onSubmit}>
            <Button title="Save" />
         </div>
      </div>
   );
};

export default CreateBlog;
