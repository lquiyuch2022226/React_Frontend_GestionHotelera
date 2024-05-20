import { useState } from "react";
import { getHotels } from "../../services/api.jsx";

export const usegetAllHotels = () => {
    const [hotels, setHotels] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const getH = async () => {
        setIsFetching(true);
        try {
            const datesHotels = await getHotels();
            console.log(datesHotels.data);

            if (datesHotels.error) {
            } else {
                setHotels(datesHotels.data.hotels);
            }
        } catch (error) {
        } finally {
            setIsFetching(false);
        }
    };

    return {
        getHotels,
        isFetching,
        allHotels: hotels,
    };
};