import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCars = () => {

    const { data: cars, isLoading } = useQuery({
        queryKey: ["cars"],
        queryFn: async () => {
            const res = await axios.get("cars.json");
            return res.data;
        }
    })
    
    return [cars, isLoading]
};

export default useCars;