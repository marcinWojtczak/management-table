import { useState } from 'react';
import { ChevronsUpDown } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { SortOrder } from '../types/users';

export default function UserTable() {
    const users = useSelector((state: RootState) => state.users.users)
    const filterOption = useSelector((state: RootState) => state.users.filterOption);
    const searchValue = useSelector((state: RootState) => state.users.searchValue);
    const [sortColumn, setSortColumn] = useState<SortOrder>({
        columnType: "filters",
        order: "asc"
    })

    
    //Set the column to sort by
    const handleSortClick = (column: "id" | "name" | "username" | "email" | "phone") => {
        if (sortColumn.columnType === column) {
            setSortColumn({
                ...sortColumn,
                order: sortColumn.order === "asc" ? "desc" : "asc"
            });
        } else {
            setSortColumn({
                columnType: column,
                order: "asc"
            })
        }
    }

    //sort columna by id or alphabetical
    const sortedUsers = [...users].sort((a, b) => {
        if (sortColumn.columnType === 'id') {
            //Sorted coumn by id
            return sortColumn.order == "asc" ? a.id - b.id : b.id - a.id;
         } else {
            //sorted column by alphabetical order
            const aValue = a[sortColumn.columnType as keyof typeof a]?.toString().toLowerCase() || "";
            const bValue = b[sortColumn.columnType as keyof typeof b]?.toString().toLowerCase() || "";
            return sortColumn.order === "asc" ?  aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
         }
    });

    //filter users by serching and sort
    let filteredUsers;

    if (filterOption === 'filters') {
         filteredUsers = sortedUsers.filter(user =>
            user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.phone.toLowerCase().includes(searchValue.toLowerCase())
        );
        
    } else {
            filteredUsers = sortedUsers.filter((user) => {
                const field = user[filterOption as keyof typeof user]?.toString().toLowerCase() || '';
                return field.includes(searchValue.toLowerCase());
        });
    }

  return (
    <>
        <div className='flex px-2 py-3 bg-slate-300'>
            <div className='flex items-center justify-start w-16 gap-2'>
                <small className='font-semibold'>Id</small>
                <ChevronsUpDown
                    onClick={() => handleSortClick('id')} 
                    className='w-4 text-slate-600 rounded-md hover:bg-slate-200' 
                />
            </div>
            <div className='flex items-center justify-start w-72 gap-2'>
                <small className='font-semibold'>Name</small>
                <ChevronsUpDown
                    onClick={() => handleSortClick('name')} 
                    className='w-4 text-slate-600 rounded-md hover:bg-white' 
                />
            </div>
            <div className='flex items-center justify-start w-72 gap-2'>
                <small className='font-semibold'>User Name</small>
                <ChevronsUpDown
                    onClick={() => handleSortClick('username')}  
                    className='w-4 text-slate-600 rounded-md hover:bg-white' 
                />
            </div>
            <div className='flex items-center justify-start w-72 gap-2'>
                <small className='font-semibold'>Email</small>
                <ChevronsUpDown
                    onClick={() => handleSortClick('email')}  
                    className='w-4 text-slate-600 rounded-md hover:bg-white' 
                />
            </div>
            <div className='flex items-center justify-start w-72 gap-2'>
                <small className='font-semibold'>Phone</small>
                <ChevronsUpDown
                    onClick={() => handleSortClick('phone')} 
                    className='w-4 text-slate-600 rounded-md hover:bg-white' 
                />
            </div>
        </div>
        {filteredUsers.map((user, index) => (
            <div
                key={user.id} 
                className={`flex p-3 ${
                    index !== filteredUsers.length - 1 ? 'border-b border-slate-300' : ''
                  } hover:bg-emerald-200`}
            >
                <small className='w-16'>{user.id}.</small>
                <p className='w-72 font-bold text-zinc-600'>{user.name}</p>
                <p className='w-72 font-semibold text-zinc-600'>{user.username}</p>
                <p className='w-72'>{user.email}</p>
                <p className='w-72 font-light'>{user.phone}</p>
            </div>
        ))}
    </>
  )
}
