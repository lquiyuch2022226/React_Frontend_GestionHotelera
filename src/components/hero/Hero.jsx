import React, { useEffect } from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import heroImage from '../../assets/img/hotel1.jpg';
import { useHotelsGet } from '../../shared/hooks';
//import SearchBar from "../SearchBar/SearchBar";

export const Hero = () => {
    const { getHotels, allHotels, HowManyHotels, isFetching } = useHotelsGet();

    useEffect(() => {
        getHotels();
    }, []);

    console.log(allHotels, HowManyHotels);

    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* left side */}
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
                            <span className="secondaryText">Hotels</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
                            </span>
                            <span className="secondaryText">Happy Customer</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28} /> <span>+</span>
                            </span>
                            <span className="secondaryText">Awards Winning</span>
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