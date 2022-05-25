import React, {useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AutheContext from "./state/auth-context";

function App() {
  const ctx = useContext(AutheContext)
  return (
    //method 1 using provide
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>

    //method2 using hook
  );
}

export default App;
