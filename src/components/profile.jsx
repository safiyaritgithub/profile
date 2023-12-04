// src/ProfileCard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

 export const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUser(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchData();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <div className=" bg-[#f2efdd] ">
      <div className='flex justify-center items-center h-screen  '>  
         <div className=" border-4 border-black rounded-lg overflow-hidden">
        <img
          className="w-[150px] h-[100px] sm:w-[200px] sm:h-[200px]"
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        </div>
        <div className="p-4 sm:relative sm:bottom-12 sm:leading-9">        
          <div className='sm:flex gap-3 text-blue-500 '>
          <p >
          <span className='text-black text-md sm:text-lg font-normal sm:font-medium'> FirstName:</span> <span className='text-sm sm:text-[15px]'>{user.name.first} </span>
          </p>
          <p>
          <span className='text-black text-md sm:text-lg font-normal sm:font-medium'>LastName:</span> <span className='text-sm sm:text-[15px]'>{user.name.last} </span>
             </p>
          </div>
          <p className="text-blue-500"><span className='text-black text-md sm:text-lg font-normal sm:font-medium'>Gender:</span><span className='text-sm sm:text-[15px] pl-1'>{user.gender}</span></p>
           <p className="text-blue-500"><span className='text-black text-md sm:text-lg font-normal sm:font-medium'>Phone:</span><span className='text-xs sm:text-[15px] pl-1'>{user.phone}</span></p>
        </div>
        </div>
        </div>

      
    </>
  );
};


