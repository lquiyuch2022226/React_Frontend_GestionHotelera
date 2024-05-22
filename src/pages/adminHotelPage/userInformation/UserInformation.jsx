import { HeaderAdHotel } from '../ComponentsAdHotel/header/HeaderAdHotel';
import './UserInformation.css'

export const UserInformation = () => {

  return (
    <div className="invoice-container">
    <div>
      <HeaderAdHotel/>
    </div>
    <div>
      <form className="form-container">
        <h1>GET-USER</h1>
        <h2>EMAIL</h2>
        <input type="email" placeholder='email here'/>
        <button className='button'>search</button>
      </form>
    </div>
  </div>
  );
};