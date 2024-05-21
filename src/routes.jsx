import React from 'react';
import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { HotelManagement } from './pages/adminPage';
import { AdminHotelPage } from './pages/adminHotelPage';

const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/dashboard', element: <DashboardPage /> },
    { path: '/hotel', element: <HotelManagement /> },
    { path: '/adminHotel', element: <AdminHotelPage /> },
    { path: '/*', element: <DashboardPage /> }, 
];

export default routes;