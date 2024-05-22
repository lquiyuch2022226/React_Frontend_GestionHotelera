import { useState } from "react";
import { postReservation } from "../../services/api.jsx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export const useAddReservation = () => {
    const [reserv, setReserv] = useState(false);
    const [reservDetails, setReservDetails] = useState(null);

    const navigate = useNavigate();

    const reserv2 = async(dateStart, dateFinish, idHabitacion, idUser) => {
        setReserv(true)

        const response = await postReservation({
            dateStart, dateFinish, idHabitacion, idUser
        });

        setReserv(false)
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Have a error to add reserv'
            )
        }

        const { reservDetails } = response.data;
        setReservDetails(reservDetails);

        localStorage.setItem('reservation', JSON.stringify(reservDetails))

        navigate('/')
    } 

    return {
        reserv2, 
        reservDetails
    }
}