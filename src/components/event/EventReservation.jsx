import React, { useState } from 'react';
import { useAddReservationEvent } from '../../shared/hooks/useAddEventRes';

import "../reservation/Reservation.css"

export const PostEventRes = ({ }) => {
    const { reserv2 } = useAddReservationEvent();

    const storedUserId = localStorage.getItem('IdUser');
    const idSinComillas = storedUserId.replace(/["']/g, '');
    //console.log(storedUserId)

    const hab = localStorage.getItem('idEvent');
    //console.log(hab)

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log('Reservation details:', { dateStart, dateFinish, idHabitacion, idUsuario });
        reserv2(hab, idSinComillas);
        console.log(hab, idSinComillas)
    };

    return (
        <div className="login_form_container">
            <div className="login_form">
                <h2>Reservation</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div id="login_button">
                        <a onClick={handleSubmit}>Do reservation</a>
                    </div>
                    <div id="login_button">
                        <a type="button" onClick={() => {}}>Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    );
};