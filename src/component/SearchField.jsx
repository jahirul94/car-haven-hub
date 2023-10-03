import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCars } from "../StateManagement/actions/CarsSlice";


const SearchField = () => {
    const cars = useSelector(state => state?.allCars.allCars);
    const [category, setCategory] = useState("")
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const match = cars?.filter(car => car?.carName.toLowerCase().includes(search))
        dispatch(setCars(match))
    }, [cars, dispatch, search])


    // for remove duplicate brand name 
    const categories = cars?.filter((car, index, self) =>
        index === self.findIndex((p) => p.brand === car.brand)
    );

    useEffect(() => {
        if (!category || category === "all-brands") {
            dispatch(setCars(cars))
        } else {
            const filterData = cars?.filter(car => car.brand === category);
            dispatch(setCars(filterData))
        }
    }, [category, cars, dispatch])

    return (
        <div className="py-4 flex space-x-10 mb-10">
            <div className='lg:relative flex items-center gap-2'>
                <input type="text" name="" onChange={(e) => setSearch(e.target.value.toLowerCase())} className="p-2 rounded-lg w-96" id="" placeholder="Search" />

                <span className='lg:absolute -ml-10 right-5 top-3 text-xl text-[#3B82F6]'><FaSearch></FaSearch></span>
            </div>
            <div className="flex space-x-2 items-center">
                <select name="" id="" className="bg-[#EDF1F6]">
                    <option value="">Relevance</option>
                </select>
            </div>
            <div className="flex space-x-2 items-center">
                <select name="" id="" onChange={(e) => setCategory(e.target.value)} className="bg-[#EDF1F6]">
                    <option value="all-brands">All Brands</option>
                    {categories?.map(c => <option key={c._id} value={c.brand}>{c.brand}</option>)}
                </select>
            </div>
        </div>
    );
};

export default SearchField;