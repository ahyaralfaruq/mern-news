import axios from "axios";

export const setDataNews = () => (dispatch) => {
   axios
      .get("http://localhost:2909/v1/news/get?page=2&perpage=10")
      .then((result) => {
         const data = result.data;
         dispatch({ type: "UPDATE_NEWS", payload: data.data });
      })
      .catch((err) => console.log(err));
};
