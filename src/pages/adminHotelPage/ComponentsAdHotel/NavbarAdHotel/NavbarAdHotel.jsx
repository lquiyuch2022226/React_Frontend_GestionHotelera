import { useNavigate } from "react-router-dom";
import logo from '../../../../assets/img/Icon.png'
import { useUserDetails } from "../../../../shared/hooks";

const NavLogo = () => {
    return(
        <div className="nav-logo-container">
            <img 
                className="nav-logo"
                src={logo} 
                alt="Logo.svg"
                width='100%'
                height='100%'
            />
        </div>
    )
}

const NavButton = ({text, onClickHandler}) => {
    return(
        <span className="nav-button" onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const NavbarAdHotel = () => {
    const { isLogged, logout } = useUserDetails()

    const navigate = useNavigate()

    const handleNavigateToHomePage = () => {
        navigate('/')
    }

    const handleNavigateToAuthPage = () => {
        navigate('/auth')
    }

    const handleNavigateToReserves = () =>{
        NavigationType('/reserves')
    }

    const handleNavigateToSettingPage = () => {
        navigate('/settings')
    }

    const handleLogout = () => {
        logout()
    }

    return(
        <div className="nav-container">
            <NavLogo/>
            <div>
                {!isLogged ? (
                 <button className="button" onClick={handleNavigateToAuthPage}>Login</button>
                ) : (
                    <div>
                        <NavButton text='Home' onClickHandler={handleNavigateToHomePage}/>
                        <NavButton text='My Account' onClickHandler={handleNavigateToSettingPage}/>
                        <NavButton text='Reserves' onClickHandler={handleNavigateToReserves}/>
                        <button className="button" onClick={handleLogout}>Logout</button>
                        <div className="navbar-button-log-container">
                            
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}