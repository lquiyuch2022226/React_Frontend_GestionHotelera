import { HeaderAdHotel } from "../header/HeaderAdHotel";
import { useUsersGet } from "../../../../shared/hooks";
import './Invoice.css'

export const Invoice = () => {
    const {getUser} = useUsersGet()

    const searchUser = () =>{
      getUser()
    }
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
            <button className="button" onClick={searchUser}>search</button>
          </form>
        </div>
      </div>
    );
  };