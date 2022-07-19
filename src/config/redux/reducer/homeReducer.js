const initialStateHome = {
   news: [],
   pages: {
      currentPage: 1,
      totalPage: 1,
   },
};

const homeReducer = (state = initialStateHome, action) => {
   // code this to change the state
   if (action.type === "UPDATE_NEWS") {
      return {
         ...state,
         news: action.payload,
      };
   }

   if (action.type === "UPDATE_PAGE_NEWS") {
      return {
         ...state,
         pages: action.payload,
      };
   }

   return state;
};

export default homeReducer;
