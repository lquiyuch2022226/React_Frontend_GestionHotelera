import { useEffect } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { NavbarAdHotel } from "../adminHotelPage/ComponentsAdHotel/NavbarAdHotel/NavbarAdHotel";
import { ContentAdHotel } from "./ContentAdHotel";
import { useUserDetails } from "../../shared/hooks";

import './adminHotelPage.css'

export const AdminHotelPage = () => {
  const { isLogged } = useUserDetails();

  useEffect(() => {
    (isLogged);
  }, []);

  return (
    <div className="dashboard-container">
      <NavbarAdHotel />
      <ContentAdHotel/>
      <div>
      </div>
    </div>
  );
};