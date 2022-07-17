const initialState = {
   news: [],
   nama: "Muhammad Ahyar",
};

const globalReducer = (state = initialState, action) => {
   // code this to change the state
   if (action.type === "UPDATE_NAME") {
      return {
         ...state,
         nama: action.payload,
      };
   }

   return state;
};

export default globalReducer;
