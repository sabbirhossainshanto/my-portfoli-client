import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { AiFillHeart } from "react-icons/ai";
const Main = () => {
  return (
    <div className="bg-[#1d1d1d]">
      <Navbar />
      <Outlet />
      <footer className="flex items-center justify-center w-full space-x-1 text-base text-gray-400 font-medium py-4 mt-5 font-Roboto">
        <p>Made with</p>
        <AiFillHeart size={19} color="#e3405f" />
        <p>by Sabbir</p>
      </footer>
    </div>
  );
};

export default Main;
