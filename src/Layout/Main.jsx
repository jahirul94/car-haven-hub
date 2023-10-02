import { Outlet } from "react-router-dom";
import Nav from "../pages/Shared/Nav";
import Footer from "../pages/Shared/Footer";
import Pagination from "../component/Paginations";
import SearchField from "../component/SearchField";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCars } from "../StateManagement/actions/allCarsSlice";


const Main = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch])

    return (
        <div className="bg-[#EDF1F6]">
            <Nav></Nav>
            <div className="w-11/12 mx-auto">
                <SearchField></SearchField>
                <Outlet></Outlet>
                <Pagination></Pagination>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;