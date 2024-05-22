import { useEffect } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Content } from "../../components/dashboard/Content";
import { useUserDetails } from "../../shared/hooks";
import { HeaderAdHotel } from './ComponentsAdHotel/header/HeaderAdHotel';
import { ContentAdHotel } from "./ContentAdHotel";

import './adminHotelPage.css'

export const AdminHotelPage = () => {
  const { isLogged } = useUserDetails();

  useEffect(() => {
    (isLogged);
  }, []);

  return (
    <div className="dashboard-container">
    <ContentAdHotel />
    <div className="Marco">
      <HeaderAdHotel />
    </div>
  </div>
  );
};