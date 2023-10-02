import { useEffect, useState } from "react";
import useCars from "../../hook/useCars";
import { PiCaretDownBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AllCars from "../AllCars/AllCars";
import { useSelector } from "react-redux";

const Home = () => {
    const [cars] = useCars();
    const [allCars, setAllCars] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const id = useSelector(state => state.id)

    useEffect(() => {
        if (search) {
            const match = cars?.filter(car => car.carName.toLowerCase().includes(search))
            setAllCars(match)
        }
        else if (id) {
            // navigate(`cars/${id}`)
            const startIndex = (id - 1) * 6;
            const endIndex = startIndex + 6;
            const displayedData = cars?.slice(startIndex, endIndex);
            setAllCars(displayedData)
        }
        else {
            setAllCars(cars?.slice(0, 6))
        }
    }, [cars, search, id, navigate])

    return (
        <div className="min-h-screen my-10">
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

            {/* display all cars  */}
            <AllCars allCars={allCars}></AllCars>
        </div>
    );
};

export default Home;