import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  function logoutHandler(){
    console.log("logout")
  }
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Warning system</div>
      <nav>
        <ul>
        <li>
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/devices">Manage devices</Link>
          </li>
          <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
