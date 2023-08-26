import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";

const Navbar = () => {

  return (
    <div>
      <Container>
        <div className="hidden 800px:flex items-center justify-between py-8 ">
          <div className="text-[#fff] font-medium">
            <Link to="/">
              <h2>Sabbir</h2>
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-10">
            <div className="hover:bg-[#2ab0ee] px-3 py-[6px] rounded shadow-[#2ab0ee] hover:shadow-sm transition duration-300">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` text-[#fff] font-medium ${isActive ? "" : ""}`
                }
              >
                Home
              </NavLink>
            </div>

            <div className="hover:bg-[#f7b908] px-3 py-[6px] rounded shadow-[#f7b908] hover:shadow-sm transition duration-300">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `text-[#fff] font-medium ${isActive ? "" : ""}`
                }
              >
                Skill
              </NavLink>
            </div>
            <div className="hover:bg-[#e44160] px-3 py-[6px] rounded shadow-[#e44160] hover:shadow-sm transition duration-300">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `text-[#fff] font-medium${isActive ? "" : ""}`
                }
              >
                Project
              </NavLink>
            </div>
            <div className="hover:bg-[#eb6559] px-3 py-[6px] rounded shadow-[#eb6559] hover:shadow-sm transition duration-300">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  ` text-[#fff] font-medium ${isActive ? "" : ""}`
                }
              >
                About
              </NavLink>
            </div>

            <div className="hover:bg-[#47a148] px-3 py-[6px] rounded shadow-[#47a148] hover:shadow-sm transition duration-300">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-[#fff] font-medium ${isActive ? "" : ""}`
                }
              >
                Contact
              </NavLink>
            </div>
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
