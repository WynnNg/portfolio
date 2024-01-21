import {
  ChromeFilled,
  FacebookFilled,
  GithubFilled,
  MailFilled,
} from "@ant-design/icons";
import React from "react";

export default function Contact() {
  return (
    <>
      <div className="arlo_tm_section" id="contact">
        <div className="container">
          <div className="arlo_tm_title_holder contact">
            <h3>Contact Me</h3>
            <span>Get in touch with me</span>
          </div>
        </div>
        <div className="arlo_tm_footer_contact_wrapper_all">
          <div className="arlo_tm_contact_wrap_all">
            <div className="container">
              <div className="contact-box">
                <div className="arlo_tm_mini_title_holder contact">
                  <h4>Get in Touch</h4>
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
                          <FacebookFilled />
                        </label>
                        <span>
                          <a
                            href="https://www.facebook.com/phucnguyen.nguyenhai.30/"
                            target="_blank"
                          >
                            &nbsp;&nbsp;&nbsp;fb/phucnguyen.nguyenhai.30/
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
