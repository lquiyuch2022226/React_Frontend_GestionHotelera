import axios from "axios";
import { logout } from "../shared/hooks";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/hoteles/v1',
    timeout: 5000
})

const api = axios.create({
    baseURL: "http://127.0.0.1:3000/hoteles/v1",
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) =>{
        const userDetails = localStorage.getItem('user')

        if(userDetails){
            const token =  JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) =>{
        return Promise.reject(e)
    }
)

export const login = async (data) => {
    try{
        return await apiClient.post('/auth/login', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const register = async (data) => {
    try{
        return await apiClient.post('/auth/register', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getUserEmail = async (email) =>{
    try{
        console.log(email, email)
        return await apiClient.get(`/user/email/${email}`)
    }catch(e){
        return{
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

export const postHotel = async (nameHotel, address, category, services, numStars, idUserAdmin) => {
    try {
        return await api.post('/addHotel', {nameHotel,  address, category, services, numStars, idUserAdmin});
    } catch (error) {
        return {
            error: true,
            message: error.message
        };
    }
};

const checkResponseStatus = (e) => {
    const responseStatus = e?.response?.status

    if(responseStatus){
        (responseStatus === 401 || responseStatus === 403) && logout
    }
}