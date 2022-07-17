import React from "react";
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
   const navigate = useNavigate();

   return (
      <div className="create-blog-wrapper">
         <Link title="back to home page" onClick={() => navigate("/")} />
         <p className="blog-title">Create News</p>
         <Input />
         <InputImages />
         <TextArea />
         <Gap height={20} />
         <div className="button-action">
            <Button title="Save" />
         </div>
      </div>
   );
};

export default CreateBlog;
