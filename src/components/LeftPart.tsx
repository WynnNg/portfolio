import React, { useEffect, useState } from "react";
import reactLogo from "@/assets/img/logo/react-logo-white.png";
import { isMobile } from "react-device-detect";
import {
  ChromeFilled,
  FacebookFilled,
  GithubFilled,
  MailFilled,
} from "@ant-design/icons";

interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: (value: boolean) => void;
}

export default function LeftPart(props: IProps) {
  const { hideLeftPart, setHideLeftPart } = props;
  const [active, setActive] = useState<string>("home");

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
      <div
        className={
          hideLeftPart
            ? "arlo_tm_leftpart_wrap opened"
            : "arlo_tm_leftpart_wrap"
        }
      >
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#">
              <img src={reactLogo} alt="desktop-logo" />
            </a>
          </div>
          <div className="menu_list_wrap">
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
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a href="mailto:nguyenhaiphucnguyen.work@gmail.com">
                    <MailFilled />
                  </a>
                </li>
                <li>
                  <a href="https://nguyenhaiphucnguyen.io.vn/" target="_blank">
                    <ChromeFilled />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/WynnNg" target="_blank">
                    <GithubFilled />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/phucnguyen.nguyenhai.30/"
                    target="_blank"
                  >
                    <FacebookFilled />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {!isMobile && (
            <a
              className={
                hideLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"
              }
              href="#"
            >
              <i
                className={
                  hideLeftPart ? "xcon-angle-left opened" : "xcon-angle-left"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setHideLeftPart(!hideLeftPart);
                }}
              ></i>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
