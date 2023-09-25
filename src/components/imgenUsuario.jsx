import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImgUser = () => {
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
    <div>
        {data.map((user) => (
          <div key={user.id}>
            <img src={user.urlImage} className='imgProfile2' alt="User Avatar" />
          </div>
        ))}
    </div>
  );
};

export default ImgUser;