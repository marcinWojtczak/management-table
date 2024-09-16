import { Search as SearchIcon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store";
import { setSearchValue, setFilterOption } from '../features/users/userSlice';
import { X } from 'lucide-react';


export default function SearchAndFilter() {
    const dispatch = useDispatch()
    const filterOption = useSelector((state: RootState) => state.users.filterOption)
    const searchInput = useSelector((state: RootState) => state.users.searchValue)
    
    function hanldleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
      dispatch(setSearchValue(event.target.value)) 
    }

    function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
      dispatch(setFilterOption(event.target.value)); 
    }

    function handleClearInput () {
      dispatch(setSearchValue(''))
    }

  return (
    <div className='flex justify-end p-2 gap-2'>
        <select 
            value={filterOption}
            onChange={handleSelectChange}
            className='border pl-2 border-slate-200 text-[12px] outline-none rounded-md'
        >
            <option value="filters">filters</option>
            <option value="id">id</option>
            <option value="name">name</option>
            <option value="username">user name</option>
            <option value="email">email</option>
            <option value="phone">phone</option>
        </select>
        <div className='relative flex items-center text-slate-400 focus-within:text-slate-800'>
            <input 
                placeholder='Search'
                className='border pl-8 border-slate-200 text-[12px] p-2 outline-none w-48 rounded-md'
                onChange={hanldleInputChange}
                value={searchInput}
            />
            <SearchIcon className='absolute ml-2 w-5 pointer-events-none'/>
            {searchInput &&  <X className='absolute ml-40 w-4' onClick={handleClearInput}/>}
            
        </div>
            
    </div>
  )
}
