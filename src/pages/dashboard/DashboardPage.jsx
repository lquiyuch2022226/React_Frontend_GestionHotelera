/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Navbar } from "../../components/navbars/NavBar";
import { Content } from "../../components/dashboard/Content";
import { useUserDetails } from "../../shared/hooks";
import { Header } from '../../components/header/Header'
import { Hero } from '../../components/hero/Hero';
import { HeaderAdHotel } from "../adminHotelPage/ComponentsAdHotel/header/HeaderAdHotel";

import "./dashboardPage.css";

export const DashboardPage = () => {
  const { isLogged } = useUserDetails();

  useEffect(() => {
    (isLogged);
  }, []);

  return (
    <div className="dashboard-container">
      <Content />
      <div className="Marco">
       <HeaderAdHotel/>
      </div>
    </div>
  );
};