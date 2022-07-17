const initialStateHome = {
   news: [],
   nama: "Muhammad Ahyar",
};

const homeReducer = (state = initialStateHome, action) => {
   // code this to change the state
   if (action.type === "UPDATE_NEWS") {
      return {
         ...state,
         news: action.payload,
      };
   }

   return state;
};

export default homeReducer;
