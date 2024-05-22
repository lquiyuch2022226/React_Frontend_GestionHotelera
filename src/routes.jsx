import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { AdminPage } from './pages/adminPage'
import { AdminHotelPage } from './pages/adminHotelPage'
import { Reserv } from "./pages/Reservacion/ReservationPage";

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <DashboardPage/>},
    {path: '/admin', element: <AdminPage/>},
    {path: '/adminHotel', element: <AdminHotelPage/>},
    {path: '/reservation', element: <Reserv/>}
]

export default routes