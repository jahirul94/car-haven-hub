import { useEffect, useState } from "react";
import CarCart from "../../component/CarCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const AllCars = ({ allCars }) => {
    const cars = useSelector(state => state?.allCars.allCars);
    const { id } = useParams();
    const [displayCars, setDisplayCars] = useState(allCars)

    useEffect(() => {
        const startIndex = (id - 1) * 6;
        const endIndex = startIndex + 6;
        const displayedData = cars?.slice(startIndex, endIndex);
        setDisplayCars(displayedData)
    }, [cars, id])


    return (
        <div>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    displayCars?.map(car => <CarCart key={car._id} car={car}></CarCart>)
                }
            </div>
        </div>
    );
};

export default AllCars;