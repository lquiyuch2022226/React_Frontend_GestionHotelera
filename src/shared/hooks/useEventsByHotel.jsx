import { useState } from "react";
import { toast } from "react-hot-toast";
import { eventsHoteId as eventsHoteIdRequest } from "../../services/api.jsx";

export const useEventsByHoteL = () => {
    const [eventsByHotelDetails, setEventsByHotelDetails] = useState([]);

    const getEventsByHotel = async (idHotel) => {
        console.log(idHotel);
        const responseData = await eventsHoteIdRequest(idHotel);

        if (responseData.error) {
            toast.error(
                responseData.e?.response?.data ||
                'Error al cargar la información del hotel'
            );
            return [];
        }

        console.log('data', responseData.data);
        setEventsByHotelDetails(responseData.data.events);
        return responseData.data.events;
    };

    return {
        eventsByHotelDetails,
        getEventsByHotel
    };
};
