import { Route, Routes } from "react-router-dom";
import { Settings } from "../settings/Settings";
import { Header } from "../header/Header";
import { Hero } from "..//hero/Hero";

export const Content = () => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="settings" element={<Settings />} />
                <Route path="home" element={<Hero />} />
            </Routes>
        </div>
    )
}   