import React, { useState } from 'react';
import { useAddReservation } from '../../shared/hooks/useAddReservation.jsx';

export const PostReservation = ({}) => {
    const { reserv2 } = useAddReservation();
    const [dateStart, setDateStart] = useState('');
    const [dateFinish, setDateFinish] = useState('');

    const storedUserId = localStorage.getItem('IdUser');
    //console.log(storedUserId)

    const hab = localStorage.getItem('idHab');
    //console.log(hab)

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log('Reservation details:', { dateStart, dateFinish, idHabitacion, idUsuario });
        reserv2(dateStart, dateFinish, hab, storedUserId);
        //console.log(dateStart, dateFinish, hab, storedUserId)
        setDateStart('');
        setDateFinish('');
    };

    return (
        <div>
            <h2>Reservation</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="dateStart">dateStart:</label><br />
                <input 
                    type="date" 
                    id="dateStart" 
                    value={dateStart}
                    onChange={(e) => setDateStart(e.target.value)} 
                    required 
                /><br /><br />

                <label htmlFor="dateFinish">dateFinish:</label><br />
                <input 
                    type="date" 
                    id="dateFinish" 
                    value={dateFinish} 
                    onChange={(e) => setDateFinish(e.target.value)} 
                    required 
                /><br /><br />

                <button onClick={handleSubmit}>Do reservation</button>
                <button type="button" >Cancel</button>
            </form>
        </div>
    );
};