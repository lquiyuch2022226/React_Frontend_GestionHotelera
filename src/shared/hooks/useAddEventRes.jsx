import { useState } from "react";
import { postReservationEvent } from "../../services/api.jsx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export const useAddReservationEvent = () => {
    const [reserv, setReserv] = useState(false);
    const [reservDetails, setReservDetails] = useState(null);

    const navigate = useNavigate();

    const reserv2 = async(idEvent, idUser) => {
        setReserv(true)

        console.log(idEvent, idUser)

        const response = await postReservationEvent({
            idEvent, idUser
        });

        setReserv(false)
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Have a error to add reserv'
            )
        }

        const { reservDetails } = response.data;
        setReservDetails(reservDetails);

        localStorage.setItem('eventReservation', JSON.stringify(reservDetails))

        navigate('/')
    } 

    return {
        reserv2, 
        reservDetails
    }
}