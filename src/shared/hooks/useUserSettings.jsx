import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getUserById, userPut } from "../../services";

export const useUserSettings = () => {
    const [userSettings, setUserSettings] = useState();

    const idUser = localStorage.getItem("IdUser");

    const fetchUserSettings = async () => {
        const response = await getUserById(idUser);

        if (response.error) {
            toast.error(
                response.e?.response?.data ||
                'Ocurrió un error al obtener los datos del usuario'
            );
            return;
        }

        setUserSettings({
            name: response.data.name,
            lastName: response.data.lastName,
            email: response.data.email,
        });
    };

    const saveSettings = async (data) => {
        console.log(data, 'data')
        const response = await userPut({data});

        if (response.error) {
            console.log(response.e?.response?.data, 'error');
            toast.error(
                'Error al actualizar la información del usuario'
            );
            return;
        }

        toast.success('Información del usuario actualizada exitosamente');
    };

    useEffect(() => {
        fetchUserSettings();
    }, []);

    return {
        isFetching: !userSettings,
        userSettings,
        saveSettings,
    };
};
