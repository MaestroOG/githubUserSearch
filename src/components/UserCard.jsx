import React from 'react'

const UserCard = ({ res }) => {
    return (
        <div className='bg-gray-300 mt-7 w-full max-w-[600px] mx-auto flex flex-col items-center justify-center py-5 px-3 rounded-lg shadow'>
            <img src={res.avatar_url} alt="avatar" className='w-1/4 rounded-full' />
            <h1 className='text-2xl mt-3 font-bold'>Name: <span className='font-normal'>{res.login}</span></h1>
            <p className='max-w-[400px] text-center mt-2'><span className='text-xl font-bold'>Bio: </span>{res.bio}</p>
            <p className='max-w-[400px] text-center mt-2'><span className='font-bold'>Followers: </span>{res.followers}</p>
            <p className='max-w-[400px] text-center mt-2'><span className='font-bold'>Followings: </span>{res.following}</p>
            <p className='max-w-[400px] text-center mt-2'><span className='font-bold'>Public Repos: </span>{res.public_repos}</p>
        </div>
    )
}

export default UserCard