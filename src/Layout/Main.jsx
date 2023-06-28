import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";



const Main = () => {
    return (
        <div className="flex justify-between">
            <div className="w-full">
            <Outlet />
            </div>
            <div className="h-screen w-10 me-12">
            <Navbar/>
            </div>
            
        </div>
    );
};

export default Main;