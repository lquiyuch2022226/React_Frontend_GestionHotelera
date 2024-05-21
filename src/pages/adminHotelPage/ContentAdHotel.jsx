import { Route, Routes } from "react-router-dom";
import { HeroAdHotel } from "../adminHotelPage/ComponentsAdHotel/heroAdHotel/HeroAdHotel";

export const ContentAdHotel = () => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="reserves" element={<HeroAdHotel />} />
            </Routes>
        </div>
    )
}   