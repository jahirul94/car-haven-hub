import { FaUserFriends, FaTachometerAlt, FaGasPump, FaFutbol } from "react-icons/fa";

const CarCart = ({ car }) => {
    const { carImage, carName, drivingMode, fuelType, mileage, modelYear,
        price, sellQuantity } = car;
    return (
        <div className="rounded-2xl overflow-hidden shadow-xl bg-[#F1F4FB]" >
            <img className="w-full h-96 p-4" src={carImage} alt="Card Image" />
            <div className="px-6 border-b-2">
                <div className="flex justify-between mb-2">
                    <p className="font-bold text-2xl">{carName}</p>
                    <p className="border-2 border-[#3B82F6] border-dotted rounded-lg px-2 py-1">{modelYear}</p>
                </div>
                <div className="grid grid-cols-2 py-4">
                    <div className="flex space-x-2 items-center text-xl font-semibold">
                        <FaTachometerAlt className="text-[#3B82F6]"></FaTachometerAlt>
                        <p>{mileage}</p>
                    </div>
                    <div className="flex space-x-2 items-center text-xl font-semibold">
                        <FaGasPump className="text-[#3B82F6]"></FaGasPump>
                        <p>{fuelType}</p>
                    </div>
                    <div className="flex space-x-2 items-center text-xl font-semibold">
                        <FaFutbol className="text-[#3B82F6]"></FaFutbol>
                        <p>{drivingMode}</p>
                    </div>
                    <div className="flex space-x-2 items-center text-xl font-semibold">
                        <FaUserFriends className="text-[#3B82F6]"></FaUserFriends>
                        <p>{sellQuantity}</p>
                    </div>
                </div>
            </div>
            <div className="px-6 py-4 flex justify-between">
                <p className="font-semibold text-xl">${price}/month</p>
                <span className="bg-[#3B82F6] text-white rounded-full px-6 py-2 font-semibold cursor-pointer">Rent now</span>
            </div>
        </div>
    );
};

export default CarCart;