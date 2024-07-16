import React, { useEffect } from "react";
import aboutImg from "@/assets/img/about/about-img.png";
import cvPDF from "@/assets/cv_nguyen_hai_phuc_nguyen_reactjs_developer.pdf";
import Parallax from "parallax-js";
import img550 from "@/assets/img/about/550x640.jpg";

export default function About() {
  useEffect(() => {
    var scene: HTMLElement | null = document.getElementById("scene");
    if (scene) {
      var parallaxInstance = new Parallax(scene, {
        relativeInput: true,
      });
      parallaxInstance.friction(0.1, 0.1);
    }
  }, []);

  return (
    <>
      <div className="arlo_tm_section relative" id="about">
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>GIỚI THIỆU</h3>
              <span>Những thông tin chính về tôi</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div
                    className="about_image_wrap parallax"
                    data-relative-input="true"
                    id="scene"
                  >
                    <div className="image layer" data-depth="0.1">
                      <img src={img550} alt="550x640" />
                      <div
                        className="inner"
                        style={{ backgroundImage: `url(${aboutImg})` }}
                      ></div>
                    </div>
                    <div className="border layer" data-depth="0.2">
                      <img src={img550} alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      Tôi tên là Nguyễn Hải Phúc Nguyên
                      <span className="arlo_tm_animation_text_word"></span>
                    </h4>
                  </div>
                  <div className="definition">
                    <p>
                      Xin chào nhà tuyển dụng! Tên tôi là{" "}
                      <strong>Nguyễn Hải Phúc Nguyên</strong>. Tôi mong muốn có
                      cơ hội được làm việc trong lĩnh vực IT software. Mục tiêu
                      hiện tại của tôi là hiểu sâu và hoàn thành tốt công việc
                      của stack Front-end. Bên cạnh đó, tôi luôn sẵn sàng học
                      hỏi công nghệ mới, phát triển bản thân ở những lĩnh vực
                      khác để thích ứng với công việc mà công ty yêu cầu.
                    </p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Email:</label>
                          <br />
                          nguyenhaiphucnguyen.work@gmail.com
                        </span>
                      </li>
                      {/* <li>
                        <span>
                          <label>Nơi ở:</label> Tân Bình, HCM
                        </span>
                      </li> */}
                      <li>
                        <span>
                          <label>Github:</label>
                          <br />
                          https://github.com/WynnNg
                        </span>
                      </li>
                      {/* <li>
                        <span>
                          <label>Website:</label>{" "}
                          <a href="#">nguyenhaiphucnguyen.io.vn</a>
                        </span>
                      </li> */}
                      {/* <li>
                        <span>
                          <label>Mail:</label>{" "}
                          <a href="mailto:nguyenhaiphucnguyen.work@gmail.com">
                            nguyenhaiphucnguyen.work&#64;gmail.com
                          </a>
                        </span>
                      </li> */}
                      {/* <li>
                        <span>
                          <label>Twitter:</label>{" "}
                          <a href="#">&#64;myusername</a>
                        </span>
                      </li> */}
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={cvPDF} download>
                          <span>Download CV</span>
                        </a>
                      </li>
                      <li className="anchor">
                        <a href="#contact">
                          <span>Send Message</span>
                        </a>
                      </li>
                    </ul>
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
