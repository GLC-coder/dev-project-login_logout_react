import React, {useContext} from "react";
import AutheContext from "../../state/auth-context";
import classes from "./Navigation.module.css";


//method 1 : use consumer
// const Navigation = (props) => {
//   return (
//     <AutheContext.Consumer>
//       {(ctx) => {
//         return (
//           <nav className={classes.nav}>
//             <ul>
//               {ctx.isLoggedIn && (
//                 <li>
//                   <a href="/">Users</a>
//                 </li>
//               )}
//               {ctx.isLoggedIn && (
//                 <li>
//                   <a href="/">Admin</a>
//                 </li>
//               )}
//               {ctx.isLoggedIn && (
//                 <li>
//                   <button onClick={props.onLogout}>Logout</button>
//                 </li>
//               )}
//             </ul>
//           </nav>
//         );
//       }}
//     </AutheContext.Consumer>
//   );
// };

// method 2 use useContext hook


const Navigation = (props) => {
  const ctx = useContext(AutheContext);
  return (
   
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={ctx.onLogOut}>Logout</button>
                </li>
              )}
            </ul>
          </nav>

  );
};

export default Navigation;
