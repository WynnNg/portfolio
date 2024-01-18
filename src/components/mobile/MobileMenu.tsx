import React, { useEffect, useState } from "react";
import mobile_logo from "@/assets/img/logo/react-logo-white-mobile.png";

export default function MobileMenu() {
  const [active, setActive] = useState<string>("home");
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    overflow: "hidden",
    height: isOpen ? 250 : 0,
    padding: isOpen ? "30px 20px" : 0,
    transition: "all 1s ease ",
  };

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const section = document.querySelector(`${hash}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setActive(hash);
    }
  }, []);

  return (
    <>
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo">
            <a href="#">
              <img src={mobile_logo} alt="mobile_logo" />
            </a>
          </div>
          <div className="arlo_tm_trigger">
            <div
              className={
                isOpen
                  ? "hamburger hamburger--collapse-r is-active"
                  : "hamburger hamburger--collapse-r"
              }
            >
              <div className="hamburger-box" onClick={() => setIsOpen(!isOpen)}>
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_mobile_menu_wrap" style={style}>
          <div className="mob_menu">
            <ul className="anchor_nav">
              <li>
                <a
                  href="#home"
                  onClick={() => setActive("#home")}
                  className={active === "#home" ? "active" : ""}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setActive("#about")}
                  className={active === "#about" ? "active" : ""}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={() => setActive("#skills")}
                  className={active === "#skills" ? "active" : ""}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setActive("#projects")}
                  className={active === "#projects" ? "active" : ""}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setActive("#contact")}
                  className={active === "#contact" ? "active" : ""}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
