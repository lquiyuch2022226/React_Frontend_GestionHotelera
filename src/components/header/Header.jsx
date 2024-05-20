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

export const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerColor = useHeaderColor();
    const { isLogged, logout } = useUserDetails()

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
                    <img src="../../assets/img/kha.jpeg" alt="logo" width={100} />
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

export default Header;