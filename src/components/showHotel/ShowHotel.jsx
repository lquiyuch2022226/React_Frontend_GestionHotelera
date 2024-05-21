import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import "./showHotel.css";

export const ShowHotel = ({ hotel }) => {
    const [desc, setDesc] = useState("");
    const [autor, setAutor] = useState("");

    const handleSubmit = () =>{

    }

    return (
        <div className='all_container'>
            <div className='container'>
                <h1 className='title'>
                    <b>{hotel.hotel.nameHotel}</b>
                </h1>
                <div className='post'>
                    <div className='imgContainer'>
                        <img src={hotel.hotel.imageUrl} alt="Imagen aca" className='image' />
                    </div>

                    <div className='textContainer'>
                        <p className='postTitle'>
                            {hotel.hotel.category}
                        </p>
                        <h1 className='postDesc'>{hotel.hotel.address}</h1>
                    </div>
                    <div className='espacio'>
                        <button className='buttonReserva' onClick={handleSubmit}>
                            <span>Hacer una reservación</span>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};