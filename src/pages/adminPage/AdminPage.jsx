import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { postHotel, getHotel, putHotel, deleteHotel } from "../../services/api";
import './adminPage.css';

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
  const [editMode, setEditMode] = useState(false);
  const [editHotelId, setEditHotelId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const fetchHotels = async () => {
    try {
      setLoading(true);
      const response = await getHotel('/getHotel');
      setHotels(response.data.hotels);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching hotels:', error);
      setMessage('Error fetching hotels');
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await getHotel('/getHotel');
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
      setMessage('Error fetching stats');
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
      setLoading(true);
      if (editMode) {
        const response = await putHotel(editHotelId, form);
        console.log('Hotel updated successfully:', response.data);
        setMessage('Hotel updated successfully');
      } else {
        const response = await postHotel(form);
        console.log('Hotel added successfully:', response.data);
        setMessage('Hotel added successfully');
      }
      fetchHotels();
      setForm({
        nameHotel: '',
        address: '',
        category: '',
        services: '',
        numStars: '',
        idUserAdmin: '',
        state: true,
      });
      setEditMode(false);
      setEditHotelId(null);
    } catch (error) {
      console.error('Error adding/updating hotel:', error);
      setMessage('Error adding/updating hotel');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (hotel) => {
    setForm({ ...hotel });
    setEditMode(true);
    setEditHotelId(hotel._id);
  };

  const handleDelete = async (hotelId) => {
    try {
      setLoading(true);
      const response = await deleteHotel(hotelId);
      console.log('Hotel eliminado exitosamente:', response);
      fetchHotels();
    } catch (error) {
      console.error('Error al eliminar hotel:', error);
      setMessage('Error al eliminar hotel');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hotel-management-container">
      <h1>Gestión de Hoteles</h1>
      {message && <div className="message">{message}</div>}
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
        <button className="submit-button" type="submit" disabled={loading}>
          {editMode ? 'Actualizar Hotel' : 'Agregar Hotel'}
        </button>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {hotels && hotels.map((hotel) => (
            <li key={hotel._id}>
              {hotel.nameHotel} - {hotel.address}
              <div className="button-container">
                <button className="edit-button" onClick={() => handleEdit(hotel)}>Editar</button>
                <button className="delete-button" onClick={() => handleDelete(hotel._id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="statistics-container">
        <h2>Estadísticas de Hoteles</h2>
        <Bar data={stats} />
      </div>
    </div>
  );
};