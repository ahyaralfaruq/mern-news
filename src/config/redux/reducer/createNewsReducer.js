const initialState = {
   formNews: {
      title: "",
      image: "",
      desc: "",
   },
   imgPrev: null,
};

const createNewsReducer = (state = initialState, action) => {
   if (action.type === "SET_FORM_NEWS") {
      return {
         ...state,
         formNews: {
            ...state.formNews,
            [action.formType]: action.formValue,
         },
      };
   }

   if (action.type === "SET_IMG_PREV") {
      return {
         ...state,
         imgPrev: action.payload,
      };
   }

   return state;
};

export default createNewsReducer;
