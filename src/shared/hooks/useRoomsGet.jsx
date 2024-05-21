/* eslint-disable no-extra-boolean-cast */
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { roomsGet as getRoomsRequest } from "../../services";

export const useRoomssGet = () => {
    const [roomsData, setRoomsData] = useState({ rooms: [], total: 0 });

    const getRooms = async (isLogged = false) => {
        const response = await getRoomsRequest();

        if (response.error) {
            return toast.error(
                response.e?.response?.data || "Error occurred when reading rooms"
            );
        }

        if (!isLogged) {
            setRoomsData({
                rooms: response.data.rooms,
                total: response.data.total,
            });
        }
    };

    useEffect(() => {
        getRooms();
    }, []);

    return {
        getRooms,
        isFetching: !Boolean(roomsData.rooms.length),
        allRooms: roomsData.rooms,
        HowManyRooms: roomsData.total,
    };
};
