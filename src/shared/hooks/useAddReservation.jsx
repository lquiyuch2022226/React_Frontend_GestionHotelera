import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postReservation } from "../../services/api.jsx"
import toast from "react-hot-toast"


export const useAddReservation = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const reservation = async(dateStart, dateFinish, idHabitacion, idUser) =>{
        setIsLoading(true)

        const response = await postReservation({
            dateStart, 
            dateFinish, 
            idHabitacion, 
            idUser
        })

        setIsLoading(false)
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Agregar'
            )
        }

        const { reservDetail } = response.data

        localStorage.setItem('reservation', JSON.stringify(reservDetail))

        navigate('/')
    }
    return {
        reservation,
        isLoading
    }
}