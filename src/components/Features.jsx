import React from "react";
import { styles } from "../styles";
import {
  flexible,
  freeselector,
  fullpagecapture,
  modern,
  userfriendly,
  screencapture,
} from "../assets";

const Features = () => {
  return (
    <section
      id="features"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-20 flex`}
    >
      <div className="w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading} text-center`}>
          Tailor-made features
        </h2>
        <p
          className={`${styles.paragraph} ${styles.flexCenter} mt-2 text-center`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ex
          purus. <br /> Vivamus elementum, nisi a molestie
        </p>
      </div>

      <section className={`${styles.flexCenter} flex-wrap features`}>
        <div
          className={`${styles.padding2} items-center flex flex-col m-3 w-[400px] h-[ 350px] cursor-pointer `}
        >
          <img src={modern} className={`flex w-[50px] h-[50px]`} />
          <h4 className={`${styles.heading4} mt-5 text-center`}>Modern Design</h4>
          <p className={`${styles.paragraph} mt-2 text-center`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ex purus.
          </p>
        </div>

        <div
          className={`${styles.padding2} items-center flex flex-col m-3 w-[400px] h-[ 350px] cursor-pointer `}
        >
          <img src={flexible} className={`flex w-[50px] h-[50px]`} />
          <h4 className={`${styles.heading4} mt-5 text-center`}>Flexible</h4>
          <p className={`${styles.paragraph} mt-2 text-center`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ex purus.
          </p>
        </div>

        <div
          className={`${styles.padding2} items-center flex flex-col m-3 w-[400px] h-[ 350px] cursor-pointer `}
        >
          <img src={userfriendly} className={`flex w-[50px] h-[50px]`} />
          <h4 className={`${styles.heading4} mt-5 text-center`}>User-Friendly</h4>
          <p className={`${styles.paragraph} mt-2 text-center`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ex purus.
          </p>
        </div>

        <div
          className={`${styles.padding2} items-center flex flex-col m-3 w-[400px] h-[ 350px] cursor-pointer `}
        >
          <img src={freeselector} className={`flex w-[50px] h-[50px]`} />
          <h4 className={`${styles.heading4} mt-5 text-center`}>Free Selector</h4>
          <p className={`${styles.paragraph} mt-2 text-center`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ex purus.
          </p>
        </div>

        <div
          className={`${styles.padding2} items-center flex flex-col m-3 w-[400px] h-[ 350px] cursor-pointer`}
        >
          <img src={screencapture} className={`flex w-[50px] h-[50px]`} />
          <h4 className={`${styles.heading4} mt-5 text-center`}>Screen Capture</h4>
          <p className={`${styles.paragraph} mt-2 text-center`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ex purus.
          </p>
        </div>

        <div
          className={`${styles.padding2} items-center flex flex-col m-3 w-[400px] h-[ 350px] cursor-pointer `}
        >
          <img src={fullpagecapture} className={`flex w-[50px] h-[50px]`} />
          <h4 className={`${styles.heading4} mt-5 text-center`}>Full Page Capture</h4>
          <p className={`${styles.paragraph} mt-2 text-center`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ex purus.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Features;
