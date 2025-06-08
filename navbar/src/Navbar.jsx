import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom"; //router-dom is used for routing
import { useState } from "react"; //useState is used to manage the state of the menu
import Home from "./pages/Home.jsx"; // home component for the home page
import About from "./pages/About.jsx"; // about component for the about page
import Services from "./pages/Services.jsx"; // services component for the services page
import Contact from "./pages/Contact.jsx"; // contact component for the contact page

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state to manage the menu open/close status

  // toggleMenu function to toggle the menu open/close status
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Router>
        <nav className="navbar">
          <div className="navbar-logo">website name</div>

          {/* hamburger icon */}
          <div className="menu" onClick={toggleMenu}>
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>
          </div>

          {/* navigation links */}
          <ul className={isMenuOpen ? "navbar-links active" : "navbar-links"}>
            <li>
              <NavLink to="/" exact onClick={toggleMenu}>
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleMenu}>
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={toggleMenu}>
                services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleMenu}>
                contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default Navbar;
