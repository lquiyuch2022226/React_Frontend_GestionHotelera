/* eslint-disable no-extra-boolean-cast */
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { usuariosGet as usuariosGetRequest } from "../../services";

export const useUsersGet = () => {
    const [usersData, setUsersData] = useState({ users: [], total: 0 });

    const getUsers = async (isLogged = false) => {
        const response = await usuariosGetRequest();

        if (response.error) {
            return toast.error(
                response.e?.response?.data || "Error occurred when reading users"
            );
        }

        if (!isLogged) {
            setUsersData({
                users: response.data.users,
                total: response.data.total,
            });
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return {
        getUsers,
        allusers:usersData.users,
        HowManyUsers: usersData.total,
    };
};