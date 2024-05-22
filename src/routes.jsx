import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { HotelManagement } from './pages/adminPage'
import { AdminHotelPage } from './pages/adminHotelPage'
import { Reserv } from "./pages/Reservacion/ReservationPage";
import { UserInformation } from "./pages/adminHotelPage/userInformation/UserInformation";
import { Evento } from "./pages/EventPage/EventPage";
import { Invoice } from "./pages/adminHotelPage/ComponentsAdHotel/Invoice/Invoice";

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <DashboardPage/>},
    {path: '/admin', element: <HotelManagement/>},
    {path: '/adminHotel', element: <AdminHotelPage/>},
    {path: '/userInformation', element: <UserInformation/>},
    {path: '/invoice', element: <Invoice/>},
    {path: '/reservation', element: <Reserv/>},
    {path: '/event', element: <Evento/>}
]

export default routes