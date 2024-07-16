import React, { useState } from "react";
import { Button, Divider, Modal } from "antd";
import { FaReact } from "react-icons/fa";
//@ts-ignore
// import { RiNextjsFill } from "react-icons/ri";
import {
  SiAntdesign,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiRedux,
  SiSass,
  SiReactrouter,
  SiTypescript,
  SiMui,
  SiNextdotjs,
  SiMysql,
  SiPhp
} from "react-icons/si";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface IProject {
  image: JSX.Element;
  title: string;
  shortDesc: string;
  detail: {
    desc: string;
    technology: string;
    member: string;
    role: string;
    demo: JSX.Element;
    github: JSX.Element;
  };
}

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>();

  const showModal = (item: IProject) => {
    setDataDetail(item);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dataProject = [
    {
      image: (
        <span>
          <SiNextdotjs size={45} /> &nbsp; <FaReact size={45} /> &nbsp;
          <SiMui size={45} /> &nbsp; <SiSass size={45} /> &nbsp;
          <SiTypescript size={45} />&nbsp;
        </span>
      ),
      title: "SoundCloud Clone",
      shortDesc:
        "Project tự học cá nhân. Clone giao diện và một số tính năng cơ bản của trang SoundCloud",
      detail: {
        desc: `Tính năng đănh nhập với thư viện Next-auth, hỗ trợ đăng nhập với Google/Github và tài khoản local của backend.
        
        Nghe nhạc với audio track ở footer
        
        Hiển thị wavetrack khi xem nhạc chi tiết
        
        Comment theo thời gian của wavetrack
        
        Tạo trang playlist/Like tracks`,
        technology: `NextJS 13 - TypeScript - MUI - Next-auth - APIs Backend được cung cấp sẵn.`,
        member: "1",
        role: "Front-end Developer",
        demo: (
          <a
            href="https://youtu.be/gUV79q-PMEQ"
            target="_blank"
          >
            https://youtu.be/gUV79q-PMEQ
          </a>
        ),
        github: (
          <a
            href="https://github.com/WynnNg/SoundCloud-Clone"
            target="_blank"
          >
            https://github.com/WynnNg/SoundCloud-Clone
          </a>
        ),
      },
    },
    {
      image: (
        <span>
          <FaReact size={45} /> &nbsp; <SiAntdesign size={45} /> &nbsp;
          <SiRedux size={45} /> &nbsp; <SiSass size={45} /> &nbsp;{" "}
          <SiReactrouter size={45} />
        </span>
      ),
      title: "Tiki Clone",
      shortDesc:
        "Project tự học cá nhân. Clone giao diện và một số tính năng cơ bản của trang Tiki",
      detail: {
        desc: `Module Auth: Chức năng đăng ký, đăng nhập, protected page, access_token, refresh_token.
        
        Module Users: CRUD user, Filter/Sorter, Import/Export CSV.
        
        Module Books: Admin (CRUD Books, Filter/Sorter, handle upload files), User (Hiển thị sách, hiển thị chi tiết sách).
        
        Module Orders: Xử lý giỏ hàng / đặt hàng.`,
        technology: `React 18 - Vite - Ant Design - SCSS - React Router 6 -
        Redux Toolkit - axios - APIs Backend được cung cấp sẵn.`,
        member: "1",
        role: "Front-end Developer",
        demo: (
          <a
            href="https://youtu.be/pCmP6zT2B4s"
            target="_blank"
          >
            https://youtu.be/pCmP6zT2B4s
          </a>
        ),
        github: (
          <a
            href="https://github.com/WynnNg/tiki-clone-frontend"
            target="_blank"
          >
            https://github.com/WynnNg/tiki-clone-frontend
          </a>
        ),
      },
    },
    {
      image: (
        <span>
          <FaReact size={45} /> &nbsp; <SiSass size={45} /> &nbsp;{" "}
          <SiTypescript size={45} />{" "}
        </span>
      ),
      title: "Portfolio",
      shortDesc:
        "Project tự học cá nhân. Chuyển đổi giao diện portfolio mẫu sang React với TypeScript",
      detail: {
        desc: "Chuyển đổi giao diện portfolio mẫu sang React với TypeScript",
        technology: "React 18 - Vite - TypeScript - SCSS",
        member: "1",
        role: "Front-end Developer",
        demo: (
          <a href="https://nguyenhaiphucnguyen.io.vn/" target="_blank">
            https://nguyenhaiphucnguyen.io.vn/
          </a>
        ),
        github: (
          <a href="https://github.com/WynnNg/portfolio" target="_blank">
            https://github.com/WynnNg/portfolio
          </a>
        ),
      },
    },
    {
      image: (
        <span>
          <SiPhp size={45} /> &nbsp; <SiMysql size={45} /> &nbsp;
          <SiHtml5 size={45} /> &nbsp; <SiCss3 size={45} /> &nbsp;
          <SiBootstrap size={45} />
        </span>
      ),
      title: "Users Manager",
      shortDesc:
        "Project backend tự học cá nhân. Xây dựng ứng dụng Users Manager cơ bản bằng PHP.",
      detail: {
        desc: "Project backend tự học cá nhân. Xây dựng ứng dụng Users Manager cơ bản bằng PHP với các tính năng: Đăng nhập / Đăng ký / Đăng xuất / Quên mật khẩu. Hiển thị / Thêm / Sửa / Xóa người dùng.",
        technology: "PHP - MySQL - Bootstrap - HTML/CSS",
        member: "1",
        role: "Back-end Developer",
        demo: (
          <a
            href=""
          >
            ...
          </a>
        ),
        github: (
          <a href="https://github.com/WynnNg/users_manager_backend_php " target="_blank">
            https://github.com/WynnNg/users_manager_backend_php
          </a>
        ),
      },
    },
    {
      image: (
        <span>
          <SiHtml5 size={45} /> &nbsp; <SiCss3 size={45} /> &nbsp;{" "}
          <SiBootstrap size={45} />{" "}
        </span>
      ),
      title: "Softy Pinko UI",
      shortDesc:
        "Sử dụng HTML/CSS và Bootstrap để tạo nên trang web tối ưu trên mọi giao diện người dùng.",
      detail: {
        desc: "Sử dụng HTML/CSS và Bootstrap để tạo nên trang web tối ưu trên mọi giao diện người dùng.",
        technology: "HTML/CSS - Bootstrap.",
        member: "1",
        role: "Front-end Developer",
        demo: (
          <a
            href="https://softy-pinko-ui.nguyenhaiphucnguyen.io.vn/"
            target="_blank"
          >
            https://softy-pinko-ui.nguyenhaiphucnguyen.io.vn/
          </a>
        ),
        github: (
          <a href="https://github.com/WynnNg/softy-pinko-ui" target="_blank">
            https://github.com/WynnNg/softy-pinko-ui
          </a>
        ),
      },
    },
    // {
    //   image: <FaReact size={50} />,
    //   title: "Website Clone Tiki",
    //   shortDesc:
    //     "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
    //   detail: {
    //     desc: "",
    //     technology: "",
    //     member: "",
    //     role: "",
    //     demo: "",
    //     github: "",
    //   },
    // },
    // {
    //   image: <FaReact size={50} />,
    //   title: "Website Clone Tiki",
    //   shortDesc:
    //     "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
    //   detail: {
    //     desc: "",
    //     technology: "",
    //     member: "",
    //     role: "",
    //     demo: "",
    //     github: "",
    //   },
    // },
    // {
    //   image: <FaReact size={50} />,
    //   title: "Website Clone Tiki",
    //   shortDesc:
    //     "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
    //   detail: {
    //     desc: "",
    //     technology: "",
    //     member: "",
    //     role: "",
    //     demo: "",
    //     github: "",
    //   },
    // },
  ];

  return (
    <>
      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>DỰ ÁN</h3>
              <span>Các dự án đã hoàn thiện</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProject.map((item, index) => {
                  return (
                    <li onClick={() => showModal(item)} key={index}>
                      <div className="inner" style={{ cursor: "pointer" }}>
                        <div className="icon">{item.image}</div>
                        <div className="title_service">
                          <h3 style={{ color: "#e3872d" }}>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDesc}</p>
                        </div>
                        <br />
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <MdKeyboardDoubleArrowRight />
                          &nbsp; Xem chi tiết
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
      >
        <h5>
          <strong>
            {dataDetail && dataDetail.title ? dataDetail.title : ""}
          </strong>
        </h5>
        <Divider />
        <h6>
          <strong>Miêu tả</strong>
        </h6>
        <p>
          {dataDetail && dataDetail.detail.desc
            ? dataDetail.detail.desc
            : "..."}
        </p>
        <br />
        <h6>
          <strong> Thông tin </strong>
        </h6>
        <p>
          <strong>Công nghệ Front-end:</strong>{" "}
          {dataDetail && dataDetail.detail.technology
            ? dataDetail.detail.technology
            : "..."}
        </p>
        <p>
          <strong>Số lượng thành viên:</strong>{" "}
          {dataDetail && dataDetail.detail.member
            ? dataDetail.detail.member
            : "..."}
        </p>
        <p>
          <strong>Vai trò:</strong>{" "}
          {dataDetail && dataDetail.detail.role
            ? dataDetail.detail.role
            : "..."}
        </p>
        <p>
          <strong>Demo:</strong>{" "}
          {dataDetail && dataDetail.detail.demo
            ? dataDetail.detail.demo
            : "..."}
        </p>
        <p>
          <strong>Link Github:</strong>{" "}
          {dataDetail && dataDetail.detail.github
            ? dataDetail.detail.github
            : "..."}
        </p>
        <br />
      </Modal>
    </>
  );
}
