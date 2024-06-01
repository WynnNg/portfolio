import {
  ChromeFilled,
  FacebookFilled,
  GithubFilled,
  MailFilled,
  GitlabOutlined
} from "@ant-design/icons";
import React from "react";

export default function Contact() {
  return (
    <>
      <div className="arlo_tm_section" id="contact">
        <div className="container">
          <div className="arlo_tm_title_holder contact">
            <h3>LIÊN LẠC</h3>
            <span>Thông tin liên lạc của tôi</span>
          </div>
        </div>
        <div className="arlo_tm_footer_contact_wrapper_all">
          <div className="arlo_tm_contact_wrap_all">
            <div className="container">
              <div className="contact-box">
                <div className="arlo_tm_mini_title_holder contact">
                  <h4>Kết nối với tôi</h4>
                </div>
                <div className="short_info_wrap">
                  <ul>
                    <li>
                      <p>
                        <label>
                          <MailFilled />
                        </label>
                        <span>
                          <a href="mailto:nguyenhaiphucnguyen.work@gmail.com">
                            &nbsp;&nbsp;&nbsp;nguyenhaiphucnguyen.work@gmail.com
                          </a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <label>
                          <ChromeFilled />
                        </label>
                        <span>
                          <a
                            href="https://nguyenhaiphucnguyen.io.vn/"
                            target="_blank"
                          >
                            &nbsp;&nbsp;&nbsp;https://nguyenhaiphucnguyen.io.vn/
                          </a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <label>
                          <GithubFilled />
                        </label>
                        <span>
                          <a href="https://github.com/WynnNg" target="_blank">
                            &nbsp;&nbsp;&nbsp;github.com/WynnNg
                          </a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <label>
                          <GitlabOutlined />
                        </label>
                        <span>
                          <a
                            href="https://gitlab.com/nguyenhaiphucnguyen"
                            target="_blank"
                          >
                            &nbsp;&nbsp;&nbsp;gitlab.com/nguyenhaiphucnguyen
                          </a>
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="arlo_tm_footer_wrap">
            <div className="container">
              <p>&copy; Copyright 2019. All Rights are Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
