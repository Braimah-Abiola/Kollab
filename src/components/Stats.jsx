import React from "react";
import { styles } from "../styles";
import { downloads, ratings, users, countries } from "../assets";

const Stats = () => {
  return (
    <section
      id="parent"
      className={`w-full h-[500px] learn`}
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      <div className={`md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}>
        <h2 className={`${styles.heading} text-left`}>
          Our recent <br /> achievements
        </h2>
        <p className={`${styles.paragraph} mt-2 text-left`}>
          With your superpowers we have reached this
        </p>
      </div>

      <section id="stats" className={`${styles.flexCenter} ml-auto flex-row`}>
        <section
          className={`${styles.flexCenter} flex-wrap`}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <div
            className={`${styles.padding2} items-center flex flex-row cursor-pointer`}
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <img src={downloads} className={`flex w-[50px] h-[50px]`} />
            <div className="ml-10">
              <h4 className={`${styles.heading4} text-start`}>10,000+</h4>
              <p className={`${styles.paragraph} text-start`}>
                Downloads per day
              </p>
            </div>
          </div>

          <div
            className={`${styles.padding2} items-center flex flex-row cursor-pointer`}
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <img src={users} className={`flex w-[50px] h-[50px]`} />
            <div className="ml-10">
              <h4 className={`${styles.heading4} text-start`}>2 Million</h4>
              <p className={`${styles.paragraph} text-start`}>Users</p>
            </div>
          </div>

          <div
            className={`${styles.padding2} items-center flex flex-row cursor-pointer`}
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <img src={ratings} className={`flex w-[50px] h-[50px]`} />
            <div className="ml-10">
              <h4 className={`${styles.heading4} text-start`}>500+</h4>
              <p className={`${styles.paragraph} text-start`}>5-star reviews</p>
            </div>
          </div>

          <div
            className={`${styles.padding2} items-center flex flex-row cursor-pointer`}
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <img src={countries} className={`flex w-[50px] h-[50px]`} />
            <div className="ml-10">
              <h4 className={`${styles.heading4} text-start`}>140</h4>
              <p className={`${styles.paragraph} text-start`}>Countries</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Stats;
