import axios from "axios";

export const setDataNews = (page) => (dispatch) => {
   axios
      .get(`http://localhost:2909/v1/news/get?page=${page}&perpage=10`)
      .then((result) => {
         const data = result.data;
         dispatch({ type: "UPDATE_NEWS", payload: data.data });
         dispatch({
            type: "UPDATE_PAGE_NEWS",
            payload: {
               currentPage: data.current_page,
               totalPage: Math.ceil(data.total_items / data.per_page),
            },
         });
      })
      .catch((err) => console.log(err));
};
