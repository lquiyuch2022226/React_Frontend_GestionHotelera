import { Route, Routes } from "react-router-dom";
import { Settings } from "../settings/Settings";
import { Header } from "../header/Header";
import { Hero } from "..//hero/Hero";
import {showHotels} from "../hotels/showHotels.jsx"
import { reservForm } from "../reservations/addReservation.jsx"

/*export const Content = () => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="settings" element={<Settings />} />
                <Route path="home" element={<Hero />} />
                <Route path="hotel" element={showHotels}/>
            </Routes>
        </div>
    )
}   */

export const Content = () => {
    return (
        <div>
            <div>
                <Routes>
                    <Route path='reserva' element={reservForm}/>
                </Routes>
            </div>
        </div>
    )
}