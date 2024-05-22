import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { AdminPage } from './pages/adminPage'
import { AdminHotelPage } from './pages/adminHotelPage'
import { UserInformation } from "./pages/adminHotelPage/userInformation/UserInformation";
import { Invoice } from "./pages/adminHotelPage/ComponentsAdHotel/Invoice/Invoice";

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <DashboardPage/>},
    {path: '/admin', element: <AdminPage/>},
    {path: '/adminHotel', element: <AdminHotelPage/>},
    {path: '/userInformation', element: <UserInformation/>},
    {path: '/invoice', element: <Invoice/>}
]

export default routes