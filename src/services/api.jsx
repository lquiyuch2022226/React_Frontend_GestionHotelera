import axios from "axios";
import { logout } from "../shared/hooks";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/hoteles/v1',
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

export const getUserById = async (id) =>{
    try{
        return await apiClient.get(`/user`, id) 
    }catch(e){
        return{
            error: true,
            e
            
        }
    }
}

export const userPut = async (data) => {
    try {
        console.log(data,'data en api');

        return await apiClient.put(`/user/put`, data.data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
}

const checkResponseStatus = (e) => {
    const responseStatus = e?.response?.status

    if(responseStatus){
        (responseStatus === 401 || responseStatus === 403) && logout
    }
}


export const getHotels = async () => {
    try {
        return await apiClient.get("/hotel/")
    } catch (e){
        error: true,
        e
    }
}


export const postReservation = async (dates) => {
    try {
        return await apiClient.post(`/reservation/addRes`, dates);
    } catch (e) {
        error: true,
        e
    }
}