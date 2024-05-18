import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import API from '../services/api';

export const Stats = () => {
  const [stats, setStats] = useState({});

  const fetchStats = async () => {
    const { data } = await API.get('/stats/hotels');
    setStats({
      labels: ['Total Hotels'],
      datasets: [
        {
          label: 'Hotels',
          data: [data.hotelCount],
          backgroundColor: ['rgba(75, 192, 192, 0.6)'],
        },
      ],
    });
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div>
      <h1>Hotel Statistics</h1>
      <Bar data={stats} />
    </div>
  );
};
