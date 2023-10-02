import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { PiCaretDownBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { setCars } from "../StateManagement/actions/CarsSlice";


const SearchField = () => {
    const cars = useSelector(state => state?.allCars.allCars);
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const match = cars?.filter(car => car?.carName.toLowerCase().includes(search))
        dispatch(setCars(match))
    }, [cars, dispatch, search])

    return (
        <div className="py-4 flex space-x-10 mb-10">
            <div className='lg:relative flex items-center gap-2'>
                <input type="text" name="" onChange={(e) => setSearch(e.target.value.toLowerCase())} className="p-2 rounded-lg w-96" id="" placeholder="Search" />

                <span className='lg:absolute -ml-10 right-5 top-3 text-xl text-[#3B82F6]'><FaSearch></FaSearch></span>
            </div>
            <div className="flex space-x-2 items-center">
                <p>Relevance</p>
                <PiCaretDownBold></PiCaretDownBold>
            </div>
            <div className="flex space-x-2 items-center">
                <p>All Brands</p>
                <PiCaretDownBold></PiCaretDownBold>
            </div>
        </div>
    );
};

export default SearchField;