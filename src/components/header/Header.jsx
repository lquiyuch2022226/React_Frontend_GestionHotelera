/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Header.css";
//import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common.js";
import { useHeaderColor } from "../../shared/hooks";
import { useUserDetails } from "../../shared/hooks";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/img/kha.jpeg'

export const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerColor = useHeaderColor();
    const { isLogged, logout } = useUserDetails()

    const NavLogo = () => {
        return (
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

    const navigate = useNavigate()

    const handleNavigateToHomePage = () => {
        navigate('/home')
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

    return (
        <section className="h-wrapper" style={{ background: headerColor }}>
            <div className="flexCenter innerWidth paddings h-container">
                {/* logo */}
                <Link to="/">
                    <NavLogo />
                    <img src="../../assets/img/hero-image.png" width={100} />
                </Link>

                {/* menu */}
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setMenuOpened(false);
                    }}
                >
                    <div
                        // ref={menuRef}
                        className="flexCenter h-menu"
                        style={getMenuStyles(menuOpened)}
                    >
                        <a onClick={handleNavigateToHomePage}>Home</a>

                        <a onClick={handleNavigateToSettingPage}>My Account</a>
                        {/* login button */}
                        {!isLogged ? (
                            <button className="button" onClick={handleNavigateToAuthPage}>
                                Login
                            </button>
                        ) : (
                            <button className="button" onClick={handleLogout}>
                                Logout
                            </button>
                        )}
                    </div>
                </OutsideClickHandler>

                {/* for medium and small screens */}
                <div
                    className="menu-icon"
                    onClick={() => setMenuOpened((prev) => !prev)}
                >
                    {/*<BiMenuAltRight size={30} />*/}
                </div>
            </div>
        </section>
    );
};