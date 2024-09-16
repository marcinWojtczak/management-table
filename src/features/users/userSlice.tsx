import { createSlice } from "@reduxjs/toolkit";
import { Notification, User } from "../../types/users";

interface UserState {
    users: User[];
    notification: Notification | null;
    filterOption: string;
    searchValue: string;
}

const initialState: UserState = {
    users: [] as User[],
    notification: null as Notification | null,
    filterOption: 'filters',
    searchValue: ''
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers(state, action) {
            state.users = action.payload
        },
        showNotification(state, action) {
            state.notification = { 
                status: action.payload.status, 
                title: action.payload.title, 
                message: action.payload.message
            }
        },
        setFilterOption(state, action) {
            state.filterOption = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },

    } 
    
})

export default userSlice.reducer
export const { getUsers, showNotification, setFilterOption, setSearchValue } = userSlice.actions