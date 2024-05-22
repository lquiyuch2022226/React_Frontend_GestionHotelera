import { HeaderAdHotel } from '../ComponentsAdHotel/header/HeaderAdHotel';
import './UserInformation.css'
import {SimpleTable} from '../../../components/SimpleTable/SimpleTable';

export const UserInformation = () => {

  return (
    <div className="invoice-container">
    <div>
      <HeaderAdHotel/>
    </div>
    <div>
      <SimpleTable/>
    </div>
  </div>
  );
};