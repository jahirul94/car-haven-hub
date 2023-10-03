import { useEffect, useState } from "react";
import CarCart from "../../component/CarCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setId } from "../../StateManagement/actions/PagenationsIdSlice";


const AllCars = ({ allCars }) => {
    const [displayCars, setDisplayCars] = useState(allCars)
    const cars = useSelector(state => state?.allCars.allCars);
    const dispatch = useDispatch();

    const findCar = useSelector(state => state.cars);
    const { id } = useParams();

    useEffect(() => {
        if (findCar?.length !== cars?.length) {
            setDisplayCars(findCar)
        } else {
            const startIndex = (id - 1) * 6;
            const endIndex = startIndex + 6;
            const displayedData = cars?.slice(startIndex, endIndex);
            setDisplayCars(displayedData)
        }
    }, [cars, id, findCar])

    useEffect(() => {
        dispatch(setId(id))
    }, [dispatch, id])

    return (
        <div className="min-h-screen">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    displayCars?.map(car => <CarCart key={car._id} car={car}></CarCart>)
                }
            </div>
        </div>
    );
};

export default AllCars;