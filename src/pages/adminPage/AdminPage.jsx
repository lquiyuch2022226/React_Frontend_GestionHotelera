import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import './adminPage.css';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export const HotelManagement = () => {
  const [hotels, setHotels] = useState([]);
  const [form, setForm] = useState({
    nameHotel: '',
    address: '',
    category: '',
    services: '',
    numStars: '',
    idUserAdmin: '',
    state: true,
  });
  const [stats, setStats] = useState({
    labels: [],
    datasets: [],
  });

  const fetchHotels = async () => {
    try {
      const response = await axios.get('/getHotel');
      setHotels(response.data.hotels);
    } catch (error) {
      console.error('Error fetching hotels:', error);
      setHotels([]);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await axios.get('/stats/hotel');
      const data = response.data;
      setStats({
        labels: ['Total Hotels'],
        datasets: [
          {
            label: 'Hoteles',
            data: [data.total],
            backgroundColor: ['rgba(75, 192, 192, 0.6)'],
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
      setStats({
        labels: [],
        datasets: [],
      });
    }
  };

  useEffect(() => {
    fetchHotels();
    fetchStats();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/addHotel', form);
      fetchHotels();
    } catch (error) {
      console.error('Error adding hotel:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/deleteHotel/${id}`);
      fetchHotels();
    } catch (error) {
      console.error('Error deleting hotel:', error);
    }
  };

  return (
    <div className="hotel-management-container">
      <h1>Gestión de Hoteles</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nameHotel"
          placeholder="Nombre del Hotel"
          value={form.nameHotel}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={form.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={form.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="services"
          placeholder="Servicios"
          value={form.services}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="numStars"
          placeholder="Número de Estrellas"
          value={form.numStars}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="idUserAdmin"
          placeholder="ID del Administrador"
          value={form.idUserAdmin}
          onChange={handleChange}
          required
        />
        <button type="submit">Agregar Hotel</button>
      </form>
      <ul>
        {hotels && hotels.map((hotel) => (
          <li key={hotel._id}>
            {hotel.nameHotel} - {hotel.address}
            <button onClick={() => handleDelete(hotel._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div className="statistics-container">
        <h2>Estadísticas de Hoteles</h2>
        <Bar data={stats} />
      </div>
    </div>
  );
};
