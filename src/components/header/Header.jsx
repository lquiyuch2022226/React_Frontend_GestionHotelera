/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Header.css";
import { getMenuStyles } from "../../utils/common.js";
import { useHeaderColor } from "../../shared/hooks";
import { useUserDetails } from "../../shared/hooks";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import logoImage from '../../assets/img/kha.png';

export const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerColor = useHeaderColor();
    const { isLogged, logout } = useUserDetails();

    const navigate = useNavigate();

    const handleNavigateToHomePage = () => {
        navigate('/home');
    };

    const handleNavigateToAuthPage = () => {
        navigate('/auth');
    };

    const handleNavigateToSettingPage = () => {
        navigate('/settings');
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <section className="h-wrapper" style={{ background: headerColor }}>
            <div className="flexCenter innerWidth paddings h-container">
                <Link to="/">
                    <img src={logoImage} width={100} alt="Logo" />
                </Link>

                <OutsideClickHandler
                    onOutsideClick={() => {
                        setMenuOpened(false);
                    }}
                >
                    <div
                        className="flexCenter h-menu"
                        style={getMenuStyles(menuOpened)}
                    >
                        <a onClick={handleNavigateToHomePage}>Home</a>
                        
                        {isLogged && (
                            <a onClick={handleNavigateToSettingPage}>My Account</a>
                        )}

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

                <div
                    className="menu-icon"
                    onClick={() => setMenuOpened((prev) => !prev)}
                >
                    {/* <BiMenuAltRight size={30} /> */}
                </div>
            </div>
        </section>
    );
};
