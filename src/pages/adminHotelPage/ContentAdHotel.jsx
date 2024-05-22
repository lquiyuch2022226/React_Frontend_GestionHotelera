import { Route, Routes } from "react-router-dom";
import { HeroAdHotel } from "../adminHotelPage/ComponentsAdHotel/hero/HeroAdHotel";


export const ContentAdHotel = () => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="reserves" element={<HeroAdHotel/>} />
            </Routes>
        </div>
    )
}   