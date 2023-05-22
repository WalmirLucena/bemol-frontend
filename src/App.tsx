import React from "react";
import { Route } from "react-router-dom";

import Home from "./presentation/pages/Home/Home";
import SignIn from "./presentation/pages/SignIn/SignIn";

const App = () => {
   return(
       <>
        <Route element={ <Home />}  path="/" />
        <Route element={ <SignIn/> } path="/sign-in" />
       </>
   )
}

export default App;