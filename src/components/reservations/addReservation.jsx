import React, { useEffect } from 'react';
import { useAddReservation } from '../../shared/hooks/useAddReservation.jsx';

export const reservForm = () => {
    const { reserv } = useAddReservation();
    const [dateStart, setDateStart] = useState('');
    const [dateFinish, setDateFinish] = useState('');
    const [idHabitacion, setIdHabitacion] = useState('');
    const [idUser, setIdUser] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        reserv(dateStart, dateFinish, idHabitacion, setIdUser);
        setAuthor('');
        setContent('');
        setIdHabitacion('');
        setIdUser('');
    };

    return (
        <div >
            <h2>Reservation</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="startDate">Start date:</label><br />
                <input type="date" id="startDate" value={dateStart} onChange={(e) => setAuthor(e.target.value)} required /><br /><br />

                <label htmlFor="finDate">End Date:</label><br />
                <input type='date' id="finDate" value={dateFinish} onChange={(e) => setContent(e.target.value)} required /><br /><br />

                <input type="submit" value="Agendar Reservacion" />
            </form>
        </div>
    );
};

export default reservForm;