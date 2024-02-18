import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills() {
  return (
    <>
      <div className="arlo_tm_section" id="skills">
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>KỸ NĂNG</h3>
              <span>Các kỹ năng hiện tại của tôi</span>
            </div>
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Kỹ Năng Front-End</h4>
                </div>
                <ul>
                  <li>HTML/CSS</li>
                  <li>Responsive Website</li>
                  <li>JavaScript / TypeScript</li>
                  <li>Bootstrap / Ant Design</li>
                  <li>Redux Toolkit / React Query</li>
                  <li>ReactJS</li>
                </ul>
              </div>
              <div className="rightbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Chứng chỉ</h4>
                </div>
                <div>
                  <p>
                    <strong>Responsive Web Design:</strong>{" "}
                    <a
                      href="https://www.freecodecamp.org/certification/NguyenHaiPhucNguyen/responsive-web-design"
                      target="_blank"
                    >
                      freecodecamp.org/certification/NguyenHaiPhucNguyen/responsive-web-design
                    </a>
                  </p>
                  <p>
                    <strong>React State Manager:</strong>
                    <br />

                    <a
                      href="https://www.udemy.com/certificate/UC-3526ee15-8c15-4e46-b35a-e866e7bfbcee/"
                      target="_blank"
                    >
                      udemy.com/certificate/UC-3526ee15-8c15-4e46-b35a-e866e7bfbcee/
                    </a>
                  </p>
                  <p>
                    <strong>React Ultimate:</strong>
                    <br />
                    <a
                      href="https://www.udemy.com/certificate/UC-da9f2ead-b7c6-44ca-ac58-f0d48c069a70/"
                      target="_blank"
                    >
                      udemy.com/certificate/UC-da9f2ead-b7c6-44ca-ac58-f0d48c069a70/
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
