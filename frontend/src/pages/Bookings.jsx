import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      const fetchBookings = async () => {
        try {
          const response = await api.get('/bookings');
          setBookings(response.data);
        } catch (error) {
          console.error('Failed to fetch bookings', error);
        }
      };
      fetchBookings();
    }
  }, [user]);

  return (
    <div>
      <h2>My Bookings</h2>
      <div>
        {bookings.map((booking) => (
          <div key={booking._id}>
            <p>Event: {booking.eventType}</p>
            <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
            <p>Status: {booking.status}</p>
            <p>Total: ${booking.totalPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;