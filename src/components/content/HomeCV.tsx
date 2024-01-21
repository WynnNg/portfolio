import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroImg from "@/assets/img/hero/nguyen.jpg";

export default function HomeCV() {
  const handleScroll = () => {
    const section = document.querySelector("#about");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="arlo_tm_section" id="home">
        <div className="arlo_tm_hero_header_wrap">
          <div className="arlo_tm_universal_box_wrap">
            <div className="bg_wrap">
              <div
                className="overlay_image hero jarallax"
                data-speed="0.1"
              ></div>
              <div className="overlay_color hero"></div>
            </div>
            <div className="content hero">
              <div className="inner_content">
                <div className="image_wrap">
                  <img src={heroImg} alt="hero" />
                </div>
                <div className="name_holder">
                  <h3>
                    Nguyễn Hải <span>Phúc Nguyên</span>
                  </h3>
                </div>
                <div className="text_typing">
                  <p>
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "Fresher ReactJS",
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        "Front-end Developer",
                        1000,
                        "Web Developer",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      placeholder={undefined}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="arlo_tm_arrow_wrap bounce anchor">
              <a href="#about">
                <i
                  className="xcon-angle-double-down"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll();
                  }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
