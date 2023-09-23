import React from 'react';
import useFirestore from '../hooks/useFirestore';

const InfoUser = () => {
  const { data, error, loading } = useFirestore("");

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    console.error('Error:', error);
    return <p>Error: {error.message}</p>;
  }

  if (data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <div className='m-2'>
      <h1>User Information</h1>
      <div className='container d-flex justify-content-center'>
      <div>
      {data.map((user) => (
        <div key={user.id}>
          <h3>Name: {user.firstName} {user.lastName}</h3>
          <h3>Phone: {user.phone}</h3>
          <h3>Country: {user.country}</h3>
          <h3>Address: {user.address}</h3>
          <h3>City: {user.city}</h3>
          <img src={user.urlImage} className='imgProfile' alt="User Avatar" />
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default InfoUser;