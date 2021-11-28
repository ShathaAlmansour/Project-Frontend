import "./style.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { AiOutlineLogin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const Nav = () => {
  const navigate = useNavigate();
  const kick = () => {
    localStorage.clear();
    navigate("/SignUp");
  };
  return (
    <div className="wrapper">
      <div className="navMenu">
        <div className="nav-items">
          <NavLink to="/hair" className="Care">
            Hair Care
          </NavLink>
          <NavLink to="/skin" className="Care">
            Skin Care
          </NavLink>
        </div>
        <div className="icons">
          <NavLink to="/login" className="lo">
            <AiOutlineLogin />
          </NavLink>
          <NavLink to="/shop" className="sh">
            <MdOutlineShoppingCart />
          </NavLink>
          <NavLink to="/Profile" className="sh">
            <BiUserCircle />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Nav;
