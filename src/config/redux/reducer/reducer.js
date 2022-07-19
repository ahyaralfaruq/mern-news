import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import homeReducer from "./homeReducer";
import createNewsReducer from "./createNewsReducer";

const reducer = combineReducers({
   homeReducer,
   globalReducer,
   createNewsReducer,
});

export default reducer;
