import React, { useEffect } from 'react';
import { usegetAllHotels } from '../../shared/hooks/usegetAllHotels.jsx';

export const showHotels = () => {
    const { getHotels, isFetching, allHotels } = useComments();

    console.log(allHotels)

    useEffect(() => {
        getHotels();
    }, []);

    return (
        <div className="hotels-container">
            <h2>Comentarios</h2>
            {isFetching ? (
                <p>Cargando hoteles...</p>
            ) : (
                <ul className="hotels-list">
                    {allHotels.map((hotel, index) => (
                        <li key={index} className="hotel-item">
                            <span className="hotel-author">{hotel.nameHotel}</span>: 
                            <span className="hotel-content">{hotel.address}</span>
                            <span className="hotel-content">{hotel.catgory}</span>
                            <span className="hotel-content">{hotel.services}</span>
                            <span className="hotel-content">{hotel.numStars}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default showHotels;