import React from 'react';
import Social from './social';
import Data from './data';
import ScrollDown from './scrollDown';
import heroImg from "../../assets/hero_profile_image.webp";

const Home = () => {
    return (
        <section className="section" id='home'>
            <div className="container grid gap-[7rem] max-[768px]:gap-20 max-[576px]:gap-16">
                <div className="grid grid-cols-[116px_repeat(2,1fr)] pt-[5.5rem] gap-x-8 items-center max-[992px]:grid-cols-[100px_repeat(2,1fr)] max-[992px]:gap-x-5 max-[768px]:grid-cols-[0.5fr_3fr] max-[768px]:pt-14">
                    <Social />
                    <div className="relative order-1 justify-self-center max-[768px]:order-none max-[768px]:justify-self-auto">
                        <div className="absolute inset-0 rounded-[2rem] bg-primary/10 blur-2xl scale-110"></div>
                        <div
                            className="relative w-[350px] h-[350px] rounded-[2rem] bg-cover bg-center bg-no-repeat animate-[profile-animate_8s_ease-in-out_infinite_1s] ring-[9px] ring-background shadow-xl max-[992px]:w-[250px] max-[992px]:h-[250px] max-[768px]:w-[200px] max-[768px]:h-[200px] max-[350px]:w-[180px] max-[350px]:h-[180px]"
                            style={{ backgroundImage: `url(${heroImg})` }}
                        ></div>
                    </div>
                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home;
