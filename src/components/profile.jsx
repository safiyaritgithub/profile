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
          className="w-[200px] h-[200px]"
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        </div>
        <div className="p-4 relative bottom-12 leading-9">        
          <div className='flex gap-3 text-blue-500 '>
          <p >
          <span className='text-black text-lg font-medium'> FirstName:</span> {user.name.first} 
          </p>
          <p>
          <span className='text-black text-lg font-medium'>LastName:</span>  {user.name.last}
             </p>
          </div>
          <p className="text-blue-500"><span className='text-black text-lg font-medium'>Gender:</span>{user.gender}</p>
           <p className="text-blue-500"><span className='text-black text-lg font-medium'>PhoneNumber:</span>{user.phone}</p>
        </div>
        </div>
        </div>

      
    </>
  );
};


