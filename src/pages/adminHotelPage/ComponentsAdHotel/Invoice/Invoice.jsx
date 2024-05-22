import { HeaderAdHotel } from "../header/HeaderAdHotel";
import './Invoice.css'

export const Invoice = () => {

    return (
      <div className="invoice-container">
        <div>
          <HeaderAdHotel/>
        </div>
        <div>
          <form className="form-container">
            <h1>INVOICE</h1>
            <h2>EMAIL</h2>
            <input type="email" placeholder="text here"/>
          </form>
        </div>
      </div>
    );
  };