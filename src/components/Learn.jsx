import React from "react";
import { learnkollab } from "../assets";
import { styles } from "../styles";
import Video from "./Video";

const Learn = () => {
  return (
    <section className={`bg-tertiary items-center w-full h-[1000px] learn`}>
      <div
        className={`w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}
      >
        <h2 className={`${styles.heading} text-center text-white`}>
          How to use Kollab®
        </h2>
        <p
          className={`${styles.paragraph} ${styles.flexCenter} mt-2 text-white text-center`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ex
          purus. <br /> Vivamus elementum, nisi a molestie
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Video videoSrc={learnkollab} />
      </div>
    </section>
  );
};

export default Learn;
