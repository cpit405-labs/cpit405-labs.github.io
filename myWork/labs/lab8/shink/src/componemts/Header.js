import { Link } from "react-router-dom";
import "./Header.css";
import About from "./About"; 

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link className="headerbtn" to="/">Home</Link></li>
        <li><Link className="headerbtn" to="/about">About us</Link></li> 
      </ul>
    </nav>
  );
};

export default Header;
