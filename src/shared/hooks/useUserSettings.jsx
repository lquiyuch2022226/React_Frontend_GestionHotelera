import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { getUserById, userPut } from "../../services"

export const useUserSettings = () => {
    const [userSettings, setUserSettings] = useState()
    const idUser = localStorage.getItem("IdUser");
    const fetchUserSettings = async () => {
        const response = await getUserById(idUser)

        if(response.error){
            return toast.error(
                response.e?.response?.data ||
                'Ocurrión un error obtener los datos del usuario'
            )
        }
        setUserSettings({
            name: response.data.name,
            lastName: response.data.lastName,
            email: response.data.email,
        })
    }

    const saveSettings = async (data) => {
        const response = await userPut(idUser, data)

        if(response.error){
            return toast.error(
                response.e?.response?.data ||
                'Error al actualizar la información del usuario'
            )
        }

        toast.success('Información del usuario actualizada exitosamente')
    }

    useEffect(() =>{
        fetchUserSettings()
    }, [])

  return {
    isFetching: !userSettings,
    userSettings,
    saveSettings
  }
}