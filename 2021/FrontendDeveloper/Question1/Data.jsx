import "./styles.css";
import React, { useEffect, useState } from 'react';

interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  address: string;
}

export default function App(): JSX.Element {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => setUsers(data.results))
      .catch(error => console.error('Error fetching users:', error));
  }, []);
  return (
    <div className="app">
      <h1 className="heading">User List</h1>
      <div className="user-list">
        {users?.map((user, index) => (
          <div className="user-card">
        <div> 
       <img src={user?.picture?.large} alt="User" />
      </div> 
      <div>
           <h2>{`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}</h2>
           <p><strong>Email:</strong>{user?.email}</p>
           <div>
            <span> {user?.location?.street?.number}</span> ,
           <span> {user?.location?.street?.name} </span> ,
           <span> {user?.location?.city}</span> ,
           <span> {user?.location?.state}</span> ,
           <span> {user?.location?.country}</span> ,
           <span> {user?.location?.postcode}</span>
           </div> 
           </div>
         </div>
        ))}
      </div>
    </div>
  );
}
