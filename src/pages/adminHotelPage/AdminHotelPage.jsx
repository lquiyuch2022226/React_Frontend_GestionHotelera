import { useEffect } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Content } from "../../components/dashboard/Content";
import { useUserDetails } from "../../shared/hooks";

import './adminHotelPage.css'

export const AdminHotelPage = () => {
  const { isLogged } = useUserDetails();

  useEffect(() => {
    (isLogged);
  }, []);

  return (
    <div className="dashboard-container">
      <h1>ADMIN DE UN HOTEL PAGEEEEEEE</h1>
    </div>
  );
};