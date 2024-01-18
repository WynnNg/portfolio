import React, { useState } from "react";
import { Button, Divider, Modal } from "antd";
import { FaReact } from "react-icons/fa";
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
    demo: string;
    github: string;
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
      image: <FaReact size={50} />,
      title: "Tiki Clone",
      shortDesc:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        desc: "",
        technology: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
    {
      image: <FaReact size={50} />,
      title: "Website Clone Tiki",
      shortDesc:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        desc: "",
        technology: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
    {
      image: <FaReact size={50} />,
      title: "Website Clone Tiki",
      shortDesc:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        desc: "",
        technology: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
    {
      image: <FaReact size={50} />,
      title: "Website Clone Tiki",
      shortDesc:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        desc: "",
        technology: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
    {
      image: <FaReact size={50} />,
      title: "Website Clone Tiki",
      shortDesc:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        desc: "",
        technology: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
    {
      image: <FaReact size={50} />,
      title: "Website Clone Tiki",
      shortDesc:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        desc: "",
        technology: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
  ];

  return (
    <>
      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>My Projects</h3>
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
                          <h3>{item.title}</h3>
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
          Công nghệ Front-end:{" "}
          {dataDetail && dataDetail.detail.technology
            ? dataDetail.detail.technology
            : "..."}
        </p>
        <p>
          Số lượng thành viên:{" "}
          {dataDetail && dataDetail.detail.member
            ? dataDetail.detail.member
            : "..."}
        </p>
        <p>
          Vai trò:{" "}
          {dataDetail && dataDetail.detail.role
            ? dataDetail.detail.role
            : "..."}
        </p>
        <p>
          Demo:{" "}
          {dataDetail && dataDetail.detail.demo
            ? dataDetail.detail.demo
            : "..."}
        </p>
        <p>
          Link Github:{" "}
          {dataDetail && dataDetail.detail.github
            ? dataDetail.detail.github
            : "..."}
        </p>
        <br />
      </Modal>
    </>
  );
}
