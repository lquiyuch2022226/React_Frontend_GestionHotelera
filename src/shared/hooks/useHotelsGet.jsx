/* eslint-disable no-extra-boolean-cast */
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getHotels as getHotelsRequest } from "../../services/api.jsx";

export const useHotelsGet = () => {
    const [hotelsData, setHotelsData] = useState({ hotels: [], total: 0 });

    const getHotels = async (isLogged = false) => {
        const response = await getHotelsRequest();

        if (response.error) {
            return toast.error(
                response.e?.response?.data || "Error occurred when reading hotels"
            );
        }

        if (!isLogged) {
            setHotelsData({
                hotels: response.data.hotels,
                total: response.data.total,
            });
        }
    };

    //console.log(getHotels)

    useEffect(() => {
        getHotels();
    }, []);

    

    return {
        getHotels,
        isFetching: !Boolean(hotelsData.hotels.length),
        allHotels: hotelsData.hotels,
        HowManyHotels: hotelsData.total,
    };
};
