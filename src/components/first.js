import React from "react";
import "../styles/_first.scss";
import Phone from "../assets/Icon-left.svg";
import Arrow from "../assets/button-icon.svg";
import Flag from "../assets/twemoji_flag-nigeria.svg";

const First = () => {
  return (
    <div>
      <main className="firstmain">
        <div className="firstwhole">
          <div className="firstleft">
            <img className="phone" src={Phone} alt="phone" />{" "}
            <number>+234 7065292789</number>
          </div>
          <div className="firstmiddle">
            <span className="middle">Get 50% Off on Selected Items</span>
            <span to="/" className="middle2">
              {" "}
              <b>|</b> Shop Now
            </span>
          </div>
          <div className="firstright">
            <span className="language">
              EN <img className="arrow" src={Arrow} alt="arrow" />{" "}
            </span>
            <span className="country">
              <img className="flag" src={Flag} alt="arrow" /> NIGERIA{" "}
              <img className="arrow" src={Arrow} alt="arrow" />{" "}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default First;
