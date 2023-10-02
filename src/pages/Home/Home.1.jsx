import { useEffect, useState } from "react";
import CarCart from "../../component/CarCard";
import useCars from "../../hook/useCars";

export const Home = () => {
    const [cars] = useCars();
    const [allCars, setAllCars] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setAllCars(cars);
    }, [cars]);

    useEffect(() => {
        const match = cars?.filter(car => car.carName.toLowerCase().includes(search));
        setAllCars(match);
    }, [cars, search]);


    return (
        <div className="min-h-screen my-10">
            <div className="py-4 flex space-x-10 mb-10">
                <div>
                    <input type="text" name="" onChange={(e) => setSearch(e.target.value.toLowerCase())} className="p-2 rounded-lg w-96" id="" placeholder="Search" />
                    {/* <FcSearch></FcSearch> */}
                </div>
                <div>
                    <p>Relevance</p>
                </div>
                <div>
                    <p>All Brands</p>
                    <PiCaretDownBold />
                </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {allCars?.map(car => <CarCart key={car._id} car={car}></CarCart>)}
            </div>
        </div>
    );
};
