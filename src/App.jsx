import React from "react";
import GlobalContext from "./ctx/index.js";
import { RouterProvider } from "react-router-dom";
import router from "./router.js";

const App = () => {
  return (
    <GlobalContext>
      <RouterProvider router={router} />
    </GlobalContext>
  );
};

export default App;
