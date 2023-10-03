import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Pagination = () => {
    const cars = useSelector(state => state?.allCars.allCars);
    const activeButton = useSelector(state => state.id)
    const [visiblePage, setVisiblePage] = useState([])

    const totalPages = Math.ceil(cars?.length / 6)
    const navigate = useNavigate();


    useEffect(() => {
        const to = totalPages <= 5 ? totalPages : 5;
        const pages = []
        for (let i = 1; i <= to; i++) {
            pages.push(i)
        }
        setVisiblePage(pages)
    }, [])

    const handleLoadData = (id) => {
        navigate(`/${id}`)
    }

    const handleForWard = () => {
        const from = visiblePage[4]
        const to = from + 5;
        const nextPages = []
        if (totalPages >= from) {
            for (let i = from; i <= to; i++) {
                nextPages.push(i)
            }
            setVisiblePage(nextPages)
        }
    }

    const handleBackWard = () => {
        const from = visiblePage[0]
        const to = from - 5;
        const previousPage = []
        if (from >= 5) {
            for (let i = to; i <= from; i++) {
                if (i > 0) {
                    previousPage.push(i)
                }
            }
            setVisiblePage(previousPage)
        }
    }

    return (
        <div>
            {/* pagination */}
            <div className="pagination">
                <button onClick={handleBackWard}><FaArrowLeft></FaArrowLeft></button>
                {
                    visiblePage?.map(page => <button className={parseFloat(activeButton) === page ? "pagination-button-active" : "pagination-button"} onClick={() => handleLoadData(page)} key={page}>{page}</button>)
                }
                <span className="pagination-button">...</span>
                <p className="pagination-button">{totalPages < 10 ? 10 : totalPages}</p>
                <button onClick={handleForWard}><FaArrowRight></FaArrowRight></button>
            </div>
        </div>
    );
};

export default Pagination;