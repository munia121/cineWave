import { Outlet } from "react-router-dom";
import Navbar from "../Component/Sheard/Navbar";

const MainLayOut = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default MainLayOut;