import { FaBackward, FaForward } from "react-icons/fa";
import CarCart from "../../component/CarCard";
import useCars from "../../hook/useCars";
import { useDispatch } from "react-redux";
import { setId } from "../../StateManagement/actions/PagenationsIdSlice";

const AllCars = ({ allCars }) => {
    const [cars] = useCars();
    const totalPages = Math.ceil(cars?.length / 6)

    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }


    const dispatch = useDispatch();
    const handleLoadData = (id) => {
        dispatch(setId(id))
    }

    return (
        <div>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    allCars?.map(car => <CarCart key={car._id} car={car}></CarCart>)
                }
            </div>
            {/* pagination */}
            <div className="pagination">
                <FaBackward></FaBackward>
                {
                    pages?.map(page => <button className="pagination-button" onClick={() => handleLoadData(page)} key={page}>{page}</button>)
                }
                <FaForward></FaForward>
            </div>
        </div>
    );
};

export default AllCars;