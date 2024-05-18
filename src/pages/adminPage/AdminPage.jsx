import { useEffect } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Content } from "../../components/dashboard/Content";
import { useUserDetails } from "../../shared/hooks";

import './adminPage.css'

export const AdminPage = () => {
  const { isLogged } = useUserDetails();

  useEffect(() => {
    (isLogged);
  }, []);

  return (
    <div className="dashboard-container">
      <h1>ADMIN DE LA PLATAFORMA PAGEEEEEEE</h1>
    </div>
  );
};