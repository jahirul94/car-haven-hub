import CarCart from "../../component/CarCard";
import { useSelector } from "react-redux";

const Home = () => {
    const cars = useSelector(state => state?.allCars.allCars);
    return (
        <div className="min-h-screen my-10">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    cars?.slice(0, 6)?.map(car => <CarCart key={car._id} car={car}></CarCart>)
                }
            </div>
        </div>
    );
};

export default Home;