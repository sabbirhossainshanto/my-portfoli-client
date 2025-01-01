import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { AiFillHeart } from "react-icons/ai";
const Main = () => {
  return (
    <div className="bg-[#000000]">
      <Navbar />
      <div className="min-h-[calc(100vh-155px)]">
        {" "}
        <Outlet />
      </div>
      <footer className="flex items-center justify-center w-full space-x-1 text-base text-gray-400 font-medium py-4 mt-5 font-Roboto">
        <p>Made with</p>
        <AiFillHeart size={19} color="#e3405f" />
        <p>by Sabbir</p>
      </footer>
    </div>
  );
};

export default Main;
