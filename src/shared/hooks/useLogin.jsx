import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services/api";
import toast from "react-hot-toast";
import { getUserEmail as getUserEmailRequest } from "../../services/api";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);

        const response = await loginRequest({ email, password });

        setIsLoading(false);
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrió un error al iniciar sesión'
            );
        }

        /*----------------Guardar Token ---------------------------- */
        const { userDetails } = response.data;
        localStorage.setItem('user', JSON.stringify(userDetails));

        /* ----------------------Guardar ID de Usuario -------------------*/ 
        const userForRoleResponse = await getUserEmailRequest(email);
        console.log('userForRoleResponse: ', userForRoleResponse)
        const { idUser } = userForRoleResponse.data;
        console.log('Este es el id del usuario: ', idUser)
        localStorage.setItem('IdUser', JSON.stringify(idUser));

        if (userForRoleResponse.error) {
            return toast.error('Error al obtener la información del usuario');
        }

        const { role } = userForRoleResponse.data;
        console.log("Role:", role);

        if (role) {
            switch (role) {
                case "USER_ROLE":
                    console.log("Role:", role);
                    navigate('/');
                    break;
                case "ADMIN_ROLE":
                    console.log("Role:", role);
                    navigate('/admin');
                    break;
                case "HOTEL_ROLE":
                    console.log("Role:", role);
                    navigate('/adminHotel');
                    break;
                default:
                    console.log("Role:", role, 'default');
                    navigate('/');
                    break;
            }
        } else {
            console.log("Role is undefined");
            toast.error('No se encontró el rol del usuario');
        }
    };

    return {
        login,
        isLoading
    };
};
