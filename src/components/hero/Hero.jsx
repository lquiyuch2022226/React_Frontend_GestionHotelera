import React, { useEffect } from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import heroImage from '../../assets/img/hotel1.jpg';
import { useHotelsGet } from '../../shared/hooks';
import { useRoomssGet } from '../../shared/hooks';
import { useUsersGet } from '../../shared/hooks';
//import SearchBar from "../SearchBar/SearchBar";

export const Hero = () => {
    const { getHotels, allHotels, HowManyHotels, isFetching } = useHotelsGet();
    const { getUsers, allUsers, HowManyUsers } = useUsersGet();
    const { getRooms, allRooms, HowManyRooms } = useRoomssGet();

    useEffect(() => {
        getHotels();
    }, []);

    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "ease-in",
                            }}
                        >
                            Kinal <br />
                            Hotel
                            <br /> Administration
                        </motion.h1>
                    </div>
                    <div className="flexColStart secondaryText flexhero-des">
                        <span>Find a variety of hotels that suit your needs very easily</span>
                        <span>Forget about all the difficulties of finding a room for yourself</span>
                    </div>

                    {/*<SearchBar/>*/}

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={0} end={HowManyHotels || 0} duration={4} /> <span>+</span>
                            </span>
                            <span className="secondaryText">Registered Hotels</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={50} end={HowManyRooms || 0} duration={4} /> <span>+</span>
                            </span>
                            <span className="secondaryText">Registered Rooms</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={100} end={HowManyUsers || 0} duration={4}/> <span>+</span>
                            </span>
                            <span className="secondaryText">Registered users</span>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="flexCenter hero-right">
                    <motion.div
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "ease-in",
                        }}
                        className="image-container"
                    >
                        <img src={heroImage} alt="houses" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};