import React from "react";
import { styles } from "../styles";
import { bannerWeb, watch } from "../assets";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const Hero = () => {
  return (
    <section id="home" className={`hero flex md:flex-row flex-col`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-bold ss:text-[80px] text-[60px] ss:leading-[75px] leading-[75px] mt-10 z-[1]">
            Thanks for installing
            <br className="sm:block hidden" />
            <span className="text-bright"> Kollab Extension </span>
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[580px] mt-2 z-[1]`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ex
          purus. Vivamus elementum, nisi a molestie
        </p>

        <div className="hero-buttons flex flex-row flex-wrap sm:mt-10 mt-6 z-[1]">
          <PrimaryButton
            buttonText="Get Started"
            style={{marginRight: '2rem'}}
          />
          <SecondaryButton
          buttonText="Watch Video"
          icon ={<img src={watch} alt="watch"/>}
          />
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={bannerWeb}
          alt="bannerimage"
          className="w-[100%] h-[100%]relative z-[5]"
        />
      </div>
    </section>
  );
};

export default Hero;
