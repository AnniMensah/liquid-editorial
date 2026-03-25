import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Mixologists = () => {
  const [mixologists, setMixologists] = useState([]);

  useEffect(() => {
    const fetchMixologists = async () => {
      try {
        const response = await api.get('/mixologists');
        setMixologists(response.data);
      } catch (error) {
        console.error('Failed to fetch mixologists', error);
      }
    };
    fetchMixologists();
  }, []);

  return (
    <div>
      <h2>Mixologists</h2>
      <div>
        {mixologists.map((mixologist) => (
          <div key={mixologist._id}>
            <h3>{mixologist.user.name}</h3>
            <p>{mixologist.bio}</p>
            <p>Specialties: {mixologist.specialties.join(', ')}</p>
            <p>Rate: ${mixologist.rate}/hour</p>
            <p>Rating: {mixologist.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mixologists;