import { useState } from "react";
import {toast} from "react-hot-toast";
import { hotelById as hotelByIdRequest } from "../../services";

export const useHotel = () => {
    const [hotelDetails, setHotelDetails] = useState();

    const getHotel = async (id) => {
        const responseData = await hotelByIdRequest(id)

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data ||
                'Error al cargar la información del hotel'
            )
        }
        setHotelDetails(responseData)
    }

    return{
        hotelDetails,
        isFetching: !hotelDetails,
        getHotel
    }
}