import { Outlet } from "react-router-dom";
import Nav from "../pages/Shared/Nav";
import Footer from "../pages/Shared/Footer";

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;