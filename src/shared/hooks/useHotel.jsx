import { useState } from "react";
import { toast } from "react-hot-toast";
import { hotelById as hotelByIdRequest } from "../../services";

export const useHotel = () => {
    const [hotelDetails, setHotelDetails] = useState(null);

    const getHotel = async (id) => {
        const responseData = await hotelByIdRequest(id);

        if (responseData.error) {
            toast.error(
                responseData.e?.response?.data ||
                'Error al cargar la información del hotel'
            );
            return null;
        }

        setHotelDetails(responseData.data);
        return responseData.data;
    };

    return {
        hotelDetails,
        isFetching: !hotelDetails,
        getHotel
    };
};
