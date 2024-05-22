import React, { useState, useEffect } from 'react';
import { SearchDates } from '../SearchDates/SearchDates';
import { useHotelsGet } from '../../shared/hooks';
import { ShowHotel } from '../showHotel/ShowHotel';
import { useHotel } from '../../shared/hooks';
import './Hotel.css';

export const Hotel = () => {
    const [hotels, setHotels] = useState([]);
    const { getHotels, allHotels } = useHotelsGet();
    const { hotelDetails, getHotel } = useHotel();
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        getHotels();
    }, []);

    const handleOneHotelClick = async (id) => {
        try {
            const hotel = await getHotel(id);
            setSelectedId(hotel);
        } catch (error) {
            console.error('Error fetching hotel details:', error);
        }
    };

    const handleSearch = (searchParams) => {


        const filteredHotels = allHotels.filter(hotel => {
            return hotel.address && searchParams.location &&
                hotel.address.toLowerCase().includes(searchParams.location.toLowerCase());
        });
        setHotels(filteredHotels);
    };

    if (selectedId && hotelDetails) {
        console.log('Rendering ShowHotel with ID:', selectedId);
        return <ShowHotel hotel={hotelDetails} />;
    }

    return (
        <div>
            <SearchDates onSearch={handleSearch} />
            <div style={{ padding: '20px' }}>
                {hotels.length > 0 && (
                    <div style={{ margin: '20px 0' }}>
                        {hotels.map(hotel => (
                            <div key={hotel.id} className="hotel-card">
                                <img src={hotel.imageUrl} alt={hotel.nameHotel} />
                                <div className="hotel-info">
                                    <h2 className="hotel-name">{hotel.nameHotel}</h2>
                                    <div className="hotel-details">
                                        <p>{hotel.numStars} stars</p>
                                        <p>{hotel.category}</p>
                                        <p>{hotel.address}</p>
                                    </div>
                                </div>
                                <div className="price-box">
                                    <p className="price">${hotel.numberOfReservations}</p>
                                    <button className="Button" onClick={() => handleOneHotelClick(hotel._id)}>View More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
