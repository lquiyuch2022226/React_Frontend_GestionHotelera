/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import logo from '../../assets/img/kha.jpeg'
import { useUserDetails } from "../../shared/hooks";

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

export const Navbar = () => {
    const { isLogged, logout } = useUserDetails()

    const navigate = useNavigate()

    const handleNavigateToHomePage = () => {
        navigate('/')
    }

    const handleNavigateToAuthPage = () => {
        navigate('/auth')
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
            <div className="nav-buttons-container">
                {!isLogged ? (
                    <NavButton text='Login' onClickHandler={handleNavigateToAuthPage}/>
                ) : (
                    <div>
                        <NavButton text='Home' onClickHandler={handleNavigateToHomePage}/>
                        <NavButton text='My Account' onClickHandler={handleNavigateToSettingPage}/>
                        <NavButton text='Logout' onClickHandler={handleLogout}/>
                    </div>
                )}
            </div>
        </div>
    )
}