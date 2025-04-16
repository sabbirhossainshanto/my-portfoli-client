import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="min-h-[calc(100vh-155px)]">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
