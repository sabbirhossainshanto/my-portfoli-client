import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Container>
        <div className="hidden 800px:flex items-center justify-between  py-8 ">
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
        <div>
          <div className="800px:hidden flex items-center justify-between py-6">
            <div className="text-[#fff] font-medium">
              <Link to="/">
                <h2>Sabbir</h2>
              </Link>
            </div>
            <div>
              {open ? (
                <RxCross1
                  onClick={() => setOpen(!open)}
                  size={25}
                  color="#e3405f"
                />
              ) : (
                <GiHamburgerMenu
                  onClick={() => setOpen(!open)}
                  size={25}
                  color="#e3405f"
                />
              )}
            </div>
          </div>
          <div>
            {open ? (
              <div className="w-full flex flex-col justify-center items-center space-y-2">
                <div
                  onClick={() => setOpen(!open)}
                  className="hover:bg-[#2ab0ee] px-3 py-[6px] rounded shadow-[#2ab0ee] hover:shadow-sm transition duration-300"
                >
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      ` text-[#fff] font-medium ${isActive ? "" : ""}`
                    }
                  >
                    Home
                  </NavLink>
                </div>

                <div
                  onClick={() => setOpen(!open)}
                  className="hover:bg-[#f7b908] px-3 py-[6px] rounded shadow-[#f7b908] hover:shadow-sm transition duration-300"
                >
                  <NavLink
                    to="/skills"
                    className={({ isActive }) =>
                      `text-[#fff] font-medium ${isActive ? "" : ""}`
                    }
                  >
                    Skill
                  </NavLink>
                </div>
                <div
                  onClick={() => setOpen(!open)}
                  className="hover:bg-[#e44160] px-3 py-[6px] rounded shadow-[#e44160] hover:shadow-sm transition duration-300"
                >
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                      `text-[#fff] font-medium${isActive ? "" : ""}`
                    }
                  >
                    Project
                  </NavLink>
                </div>
                <div
                  onClick={() => setOpen(!open)}
                  className="hover:bg-[#eb6559] px-3 py-[6px] rounded shadow-[#eb6559] hover:shadow-sm transition duration-300"
                >
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      ` text-[#fff] font-medium ${isActive ? "" : ""}`
                    }
                  >
                    About
                  </NavLink>
                </div>

                <div
                  onClick={() => setOpen(!open)}
                  className="hover:bg-[#47a148] px-3 py-[6px] rounded shadow-[#47a148] hover:shadow-sm transition duration-300"
                >
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
            ) : null}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
