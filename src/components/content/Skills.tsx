import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills() {
  return (
    <>
      <div className="arlo_tm_section" id="skills">
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Skills</h3>
              <span>Các dự án đã hoàn thiện</span>
            </div>
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Kỹ Năng Front-End</h4>
                </div>
                <ul>
                  <li>HTML/CSS</li>
                  <li>Reponsive Website</li>
                  <li>JavaScript / TypeScript</li>
                  <li>Bootstrap / Ant Design</li>
                  <li>Redux Toolkit / React Query</li>
                  <li>ReactJS</li>
                </ul>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div
                    className="arlo_tm_progress_wrap"
                    data-size="small"
                    data-round="c"
                    data-strip="off"
                  >
                    <div className="arlo_tm_progress">
                      <span>
                        <span className="label">HTML/CSS</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={90}
                          bgColor="#333"
                          height="5px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div className="arlo_tm_progress">
                      <span>
                        <span className="label">JavaScript/TypeScript</span>
                        <span className="number">75%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={75}
                          bgColor="#333"
                          height="5px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div className="arlo_tm_progress">
                      <span>
                        <span className="label">
                          Redux Toolkit / React Query
                        </span>
                        <span className="number">70%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={70}
                          bgColor="#333"
                          height="5px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div className="arlo_tm_progress">
                      <span>
                        <span className="label">
                          ReactJS (JavaScript/TypeScript)
                        </span>
                        <span className="number">80%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={80}
                          bgColor="#333"
                          height="5px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
