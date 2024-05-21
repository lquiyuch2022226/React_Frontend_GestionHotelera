import { Route, Routes } from "react-router-dom";
import { Settings } from "../settings/Settings";
import { Hotel } from "../Hotel/Hotel";
import { Hero } from "../hero/Hero";
import { SearchDates } from '../SearchDates/SearchDates'

export const Content = () => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="settings" element={<Settings />} />
                <Route path="home" element={<><Hero /><Hotel /></>} />
            </Routes>
        </div>
    )
}   