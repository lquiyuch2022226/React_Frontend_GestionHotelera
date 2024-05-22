import { useState } from "react";
import { toast } from "react-hot-toast";
import { roomsGetOnlyHotel as roomsGetOnlyHotelRequest } from "../../services";

export const useRoomsByHotel = () => {
    const [roomsByHotelDetails, setRoomsByHotelDetails] = useState([]);

    const getRoomsByHotel = async (idHotel) => {
        console.log(idHotel);
        const responseData = await roomsGetOnlyHotelRequest(idHotel);

        if (responseData.error) {
            toast.error(
                responseData.e?.response?.data ||
                'Error al cargar la información del hotel'
            );
            return [];
        }

        console.log('data', responseData.data);
        setRoomsByHotelDetails(responseData.data.rooms);
        return responseData.data.rooms;
    };

    return {
        roomsByHotelDetails,
        getRoomsByHotel
    };
};
