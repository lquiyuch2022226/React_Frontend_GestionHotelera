import React, { useState } from 'react';
import { useAddReservation } from '../../shared/hooks/useAddReservation.jsx';

import "./Reservation.css"

export const PostReservation = ({ }) => {
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
        <div className="login_form_container">
            <div className="login_form">
                <h2>Reservation</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input_group">
                        <label htmlFor="dateStart">Start Date:</label><br />
                        <input
                            type="date"
                            id="dateStart"
                            className="input_text"
                            value={dateStart}
                            onChange={(e) => setDateStart(e.target.value)}
                            required
                        /><br /><br />
                    </div>
                    <div className="input_group">
                        <label htmlFor="dateFinish">Finish Date:</label><br />
                        <input
                            type="date"
                            id="dateFinish"
                            className="input_text"  
                            value={dateFinish}
                            onChange={(e) => setDateFinish(e.target.value)}
                            required
                        /><br /><br />
                    </div>
                    <div id="login_button">
                        <a onClick={handleSubmit}>Do reservation</a>
                    </div>
                    <div id="login_button">
                        <a type="button" onClick={() => { setDateStart(''); setDateFinish(''); }}>Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    );
};