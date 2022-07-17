const { createStore } = require("redux");

const initialState = {
   news: [],
   nama: "Muhammad Ahyar",
};

const reducer = (state = initialState, action) => {
   // code this to change the state
   if (action.type === "UPDATE_NEWS") {
      return {
         ...state,
         news: action.payload,
      };
   }
   if (action.type === "UPDATE_NAME") {
      return {
         ...state,
         nama: action.payload,
      };
   }
   return state;
};

const store = createStore(reducer);

export default store;
