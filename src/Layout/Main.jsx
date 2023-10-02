import { Outlet } from "react-router-dom";
import Nav from "../pages/Shared/Nav";
import Footer from "../pages/Shared/Footer";

const Main = () => {
    return (
        <div className="bg-[#EDF1F6]">
            <Nav></Nav>
            <div className="w-11/12 mx-auto"> <Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;