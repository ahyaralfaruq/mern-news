const { createStore } = require("redux");

const initialState = {
   news: [],
   nama: "Muhammad Ahyar",
};

const reducer = (state = initialState, action) => {
   // code this to change the state
   return state;
};

const store = createStore(reducer);

export default store;
