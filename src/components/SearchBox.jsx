import React, { useState } from 'react'
import UserCard from './UserCard';
import { FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
    const [value, setValue] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const apiURL = 'https://api.github.com/users/'

    const fetchUser = async (user) => {
        try {
            setLoading(true)
            const response = await fetch(apiURL + user);
            const data = await response.json()
            setResponse(data)
            setLoading(false)
        } catch (error) {
            console.error(error.message)
        }
    }

    const handleTimesClick = () => setValue("")

    return (
        <>
            <div className="w-full bg-gradient-to-r from-blue-500 to-green-500 min-h-[300px] flex items-center justify-center flex-col">
                <h1 className='text-4xl font-normal text-white'>Search Github User</h1>
                <div className="input-container mt-5 w-96 bg-white flex items-center px-3 py-3 gap-4 rounded-lg">
                    {value.length > 0 && <FaTimes className='text-3xl cursor-pointer' onClick={handleTimesClick} />}
                    <input type="text" placeholder='Enter username' value={value} onChange={(e) => setValue(e.target.value)}
                        onKeyDown={(e) => {
                            e.code === 'Enter' ? fetchUser(value) : null
                        }}
                        className='border-none outline-none bg-transparent' />
                    <FaSearch className={`text-3xl ml-auto ${loading ? 'cursor-wait' : 'cursor-pointer'}`} onClick={() => fetchUser(value)} />
                </div>
            </div>
            {error ? (
                <div className='text-red-600 text-3xl font-normal text-center mt-7'>{error}</div>
            ) : (
                response ? (
                    <UserCard res={response} />
                ) : (
                    loading ? <div className='mt-7 text-center text-3xl'>Loading...</div> : null
                )
            )}
        </>
    )
}

export default SearchBox