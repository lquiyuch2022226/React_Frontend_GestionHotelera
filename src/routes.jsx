import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { AdminPage } from './pages/adminPage'
import { AdminHotelPage } from './pages/adminHotelPage'
import { Settings } from "./components/settings/Settings";

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <DashboardPage/>},
    {path: '/admin', element: <AdminPage/>},
    {path: '/adminHotel', element: <AdminHotelPage/>},
    {path: '/settings', element: <Settings/>}
]

export default routes