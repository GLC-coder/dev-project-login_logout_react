import React, {useState, useEffect} from "react";

const AutheContext = React.createContext({
  isLoggedIn: false,
  onLogOut: () => {},
  onLogIn: (email, password) => {}
});

export const AutheContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
      const storeUserLoggedInData = localStorage.getItem("isLoggedIn");
      if (storeUserLoggedInData === "1") {
        setIsLoggedIn("true");
      }
    },[]);

  const loginHandler = (email, password) => {
            localStorage.setItem("isLoggedIn", "1")
            setIsLoggedIn(true);
          };

  const logoutHandler = () => {
            localStorage.removeItem("isLoggedIn")
            setIsLoggedIn(false);
          };
  
  return <AutheContext.Provider value={{isLoggedIn:isLoggedIn, onLogIn :loginHandler, onLogOut : logoutHandler }}>{props.children}</AutheContext.Provider>;
}

export default AutheContext;