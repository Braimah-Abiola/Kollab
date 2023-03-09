import React from "react";
import { styles } from "../styles";
import { quote } from "../assets";

const Reviews = () => {
  return (
    <section
      className={`bg-review w-full h-[1000px] learn`}
      style={{ position: "relative" }}
    >
      <img src={quote} />
      <div
        className={`md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}
        style={{ position: "absolute", top: 190, left: 150 }}
      >
        <h2 className={`${styles.heading} text-left`}>
          Real Reviews from <br /> Real Users
        </h2>
        <p className={`${styles.paragraph} mt-2 text-left`}>
          Get inspired by these reviews
        </p>
      </div>
    </section>
  );
};

export default Reviews;
