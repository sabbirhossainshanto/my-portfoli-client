import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="bg-[#1d1d1d]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
