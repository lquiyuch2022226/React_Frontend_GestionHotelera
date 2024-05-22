import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { AdminPage } from './pages/adminPage'
import { AdminHotelPage } from './pages/adminHotelPage'
import { Reserv } from "./pages/Reservacion/ReservationPage";
import { Evento } from "./pages/EventPage/EventPage";

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <DashboardPage/>},
    {path: '/admin', element: <AdminPage/>},
    {path: '/adminHotel', element: <AdminHotelPage/>},
    {path: '/reservation', element: <Reserv/>},
    {path: '/event', element: <Evento/>}
]

export default routes