import axios from "axios";
import { logout } from "../shared/hooks";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/hoteles/v1',
    timeout: 5000
})

const api = axios.create({
    baseURL: "http://127.0.0.1:8080/hoteles/v1/hotels",
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user')

        if (userDetails) {
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const register = async (data) => {
    try {
        return await apiClient.post('/auth/register', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getUserEmail = async (email) => {
    try {
        console.log(email, email)
        return await apiClient.get(`/user/email/${email}`)
    } catch (e) {
        return {
            error: true,
            e

        }
    }
}

export const getHotel = async () => {
    try {
        return await api.get('/hotel')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const postHotel = async (hotelData) => {
    try {
        return await api.post('/addHotel', hotelData);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const putHotel = async (hotelId, hotelData) => {
    try {
        return await api.put(`/updateHotel/${hotelId}`, hotelData);
    } catch (error) {
        console.error('Error updating hotel:', error);
        return {
            error: true,
            message: 'Error updating hotel'
        };
    }
};

export const deleteHotel = async (hotelId) => {
    try {
        const response = await api.delete(`/deleteHotel/${hotelId}`);
        return response.data;
    } catch (e) {
        console.error('Error in deleteHotel:', e);
        throw e;
    }
};

const checkResponseStatus = (e) => {
    const responseStatus = e?.response?.status

    if (responseStatus) {
        (responseStatus === 401 || responseStatus === 403) && logout
    }
}