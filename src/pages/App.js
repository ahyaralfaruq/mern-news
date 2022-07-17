import React from "react";
import { Provider } from "react-redux";
import { ConfRoutes, store } from "../config";
import "./App.css";

function App() {
   return (
      <Provider store={store}>
         <ConfRoutes />
      </Provider>
   );
}

export default App;
