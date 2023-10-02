import { FaBackward, FaForward } from "react-icons/fa";
import {useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Pagination = () => {
    const cars = useSelector(state => state?.allCars.allCars);
    const totalPages = Math.ceil(cars?.length / 6)
    const navigate = useNavigate();

    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    const handleLoadData = (id) => {
        navigate(`/cars/${id}`)
    }

    return (
        <div>
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

export default Pagination;