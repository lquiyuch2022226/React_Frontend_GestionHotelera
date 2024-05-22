/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useRoomsByHotel } from "../../shared/hooks";
import "./showHotel.css";

export const ShowHotel = ({ hotel }) => {
    const [desc, setDesc] = useState("");
    const [autor, setAutor] = useState("");
    const { roomsByHotelDetails, getRoomsByHotel } = useRoomsByHotel();

    const navigate = useNavigate();



    const handleSubmitRooms = async () => {
        try {
            console.log(hotel.hotel._id)
            await getRoomsByHotel(hotel.hotel._id);
        } catch (error) {
            toast.error('Error al obtener las habitaciones del hotel');
        }
    };

    const handleSubmit = () => {
        const storedUserId = localStorage.getItem('IdUser');
        console.log(storedUserId)

    };

    const handleReservClick = () => {
        
        navigate('/reservation');
        localStorage.setItem('idHab', item._id)
    };


    return (
        <div>
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
                            <button className='buttonReserva' onClick={handleSubmitRooms}>
                                <span>Ver Habitaciones</span>
                            </button>
                            
                            <button className='buttonReserva' onClick={handleSubmit} >
                                <span>Programar un evento</span>
                            </button>

                        </div>
                        
                    </div>
                </div>
            </div >

            <div className='container_2'>
                <div className='input_Title'>
                    <h4 className='fooder_title'>Rooms</h4>
                </div>

                <div>
                    <div className='comments'>
                        {roomsByHotelDetails.slice().reverse().map((item) => (
                            <div className='comment' key={item._id}>
                                <div className='user'>
                                    <img
                                        src={'../../../'}
                                        alt="Foto habitación"
                                        width={50}
                                        height={50}
                                        className='image_user'
                                    />
                                </div>
                                <div>
                                    <div className='info_comment'>
                                        <p className='autorName'>{item.type}</p>
                                        <p className='date'>{'Capacity: '}{item.capacity}</p>
                                        <p className='date'>{'Price: '}{item.price}</p>
                                    </div>
                                    <p className='desc'>{'Available: '}{item.available}</p>
                                    <p className='desc'>{'Available Date: '}{item.availableDate}</p>
                                </div>
                                <div className='espacio'>
                                    <button className='button' onClick={handleReservClick}>
                                        <span>Reserve this room</span>
                                    </button>

                                </div>
                                
                            </div>
                        ))}


                    </div>
                </div>
            </div>


        </div>
    );
};
