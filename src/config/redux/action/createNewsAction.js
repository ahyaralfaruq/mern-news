import axios from "axios";

export const setFormNews = (formType, formValue) => {
   return {
      type: "SET_FORM_NEWS",
      formType: formType,
      formValue: formValue,
   };
};

export const setImgPrev = (imgPrev) => {
   return {
      type: "SET_IMG_PREV",
      payload: imgPrev,
   };
};

export const postToAPI = (data) => {
   const sendData = new FormData();

   sendData.append("title", data.title);
   sendData.append("image", data.image);
   sendData.append("desc", data.desc);

   axios
      .post(`http://localhost:2909/v1/news/post`, sendData, {
         headers: {
            "content-type": "multipart/form-data",
         },
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
};

export const updateToAPI = (data, id) => {
   const sendData = new FormData();

   sendData.append("title", data.title);
   sendData.append("image", data.image);
   sendData.append("desc", data.desc);

   axios
      .put(`http://localhost:2909/v1/news/post/${id}`, sendData, {
         headers: {
            "content-type": "multipart/form-data",
         },
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
};
