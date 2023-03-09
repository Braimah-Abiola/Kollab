import React from "react";
import { logowhite, chrome, edge, safari } from "../assets";
import Download from "./Download";
import { styles } from "../styles";

const Footer = () => {
  return (
    <section id="footer" className="bg-tertiary w-full h-[450px]">
      <div className="left">
        <img src={logowhite} alt="kollab logo" class="logo" />
        <div className="text-group font-semibold cursor-pointer text-white">
          <span>Download Now</span>
          <span className="ml-10">License</span>
        </div>
        <div className="text-group2 font-semibold text-white cursor-pointer">
          <span>About</span>
          <span className="ml-10">Features</span>
          <span className="ml-10">Help</span>
          <span className="ml-10">Contact</span>
        </div>
        <div className="copyright text-white font-normal">
          &copy; 2023 Kollab. All rights reserved.
        </div>
      </div>
      <div className="right">
        <p className={`${styles.paragraph} text-white mb-10`}>Get the extension now!</p>
        <Download
          textLine1="Get from Chrome"
          textLine2="Extension Store"
          icon={<img src={chrome} alt="Icon" />}
        />
        <Download
          textLine1="Get from"
          textLine2="Edge Ad-ons"
          icon={<img src={edge} alt="Icon" />}
        />
        <Download
          textLine1="Get Kollab for"
          textLine2="Safari"
          icon={<img src={safari} alt="Icon" />}
        />
      </div>
    </section>
  );
};

export default Footer;
