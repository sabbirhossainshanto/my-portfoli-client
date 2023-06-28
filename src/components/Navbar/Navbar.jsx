import { HiOutlineHome } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { BiSolidUser, BiSolidMessageRounded } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-evenly h-full fixed">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `bg-gray-800 text-white text-xl w-12 h-12 rounded-full flex justify-center items-center hover:bg-gradient-to-r from-[#7a48cd] via-rose-500 to-rose-700 transition-colors duration-500 transform  ${
            isActive
              ? "bg-gradient-to-r from-[#7a48cd] via-rose-500 to-rose-700"
              : ""
          }`
        }
      >
        <HiOutlineHome />
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `bg-gray-800 text-white text-xl w-12 h-12 rounded-full flex justify-center items-center hover:bg-gradient-to-r from-[#7a48cd] via-rose-500 to-rose-700 ${
            isActive
              ? "bg-gradient-to-r from-[#7a48cd] via-rose-500 to-rose-700"
              : ""
          }`
        }
      >
        <BiSolidUser />
      </NavLink>
      <NavLink
        to="/skills"
        className={({ isActive }) =>
          `bg-gray-800 text-white text-xl w-12 h-12 rounded-full flex justify-center items-center hover:bg-gradient-to-r from-[#7a48cd] via-rose-500 to-rose-700 ${
            isActive
              ? "bg-gradient-to-r from-[#7a48cd] via-rose-500 to-rose-700"
              : ""
          }`
        }
      >
        <FaReact />
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          `bg-gray-800 text-white text-xl w-12 h-12 rounded-full flex justify-center items-center hover:bg-gradient-to-r from-[#7a48cd] via-rose-500 to-rose-700 ${
            isActive
              ? "bg-gradient-to-r from-[#7a48cd] via-rose-500 to-rose-700"
              : ""
          }`
        }
      >
        <CgWebsite />
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `bg-gray-800 text-white text-xl w-12 h-12 rounded-full flex justify-center items-center hover:bg-gradient-to-r from-[#7a48cd] via-rose-500 to-rose-700 ${
            isActive
              ? "bg-gradient-to-r from-[#7a48cd] via-rose-500 to-rose-700"
              : ""
          }`
        }
      >
        <BiSolidMessageRounded />
      </NavLink>
    </div>
  );
};

export default Navbar;
