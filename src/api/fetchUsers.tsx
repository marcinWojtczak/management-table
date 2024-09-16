import axios, { AxiosError } from "axios";
import { User } from "../types/users";

const API_URL = 'https://jsonplaceholder.typicode.com/users/'

export const fetchUsers = async () => {
    try {
        const response = await axios.get<User[]>(API_URL);
        return response.data
    } catch(error) {
        if(error instanceof AxiosError) {
            console.log('Axios Error:', {
                message: error.message,
                code: error.code
            })
        }
        console.error('Unexpected Error:', error);
        throw error;
    }
}