import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store"; 
import { useEffect } from "react";
import { getUsers } from "../features/users/userSlice";
import { showNotification } from "../features/users/userSlice";
import { fetchUsers } from "../api/fetchUsers";
import Notification from "../UI/Notification";
import UsersTable from "./UserTable";
import SearchAndFilter from "./SearchAndFilter";


export default function Table() {
    const dispatch = useDispatch()
    const notification = useSelector((state: RootState) => state.users.notification)
    
    useEffect(() => {
        const fetchData = async () => {
            dispatch(
                showNotification({
                    status: 'pending',
                    title: 'Loading...',
                    message: 'Loading users data'
                })
            );

            try {
                const usersData = await fetchUsers()
                dispatch(getUsers(usersData))
            } catch (error) {
                dispatch(
                    showNotification({
                        status: '404',
                        title: '',
                        message: "Hello, is it me you're looking for!",
                    })
                );
            }
        }

        fetchData()
    }, [dispatch])

    
  return (
    <>
    {notification?.status === '404' ? (
        <Notification 
            status={notification.status} 
            title={notification.title} 
            message={notification.message}
        />
    ) : (
       
        <div className='flex flex-col shadow-2xl bg-white border border-slate-400 rounded-lg'>
            <SearchAndFilter />
            <UsersTable />
        </div>
        
    )}
    </>
  )
}
