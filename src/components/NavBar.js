import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => (
  <nav className="navbar">
    <Link to="/">E-Commerce</Link>
    <Link to="/cart">Cart ({cartCount})</Link>
  </nav>
);

export default Navbar;
