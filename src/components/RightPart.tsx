import React from "react";
import HomeCV from "@/components/content/HomeCV";
import About from "@/components/content/About";
import Skills from "./content/Skills";
import Projects from "./content/Projects";
import Contact from "./content/Contact";

interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RightPart(props: IProps) {
  const { hideLeftPart, setHideLeftPart } = props;

  return (
    <>
      <div
        className={
          hideLeftPart ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"
        }
      >
        <div className="rightpart_inner">
          <HomeCV />

          {/* <!-- ABOUT --> */}
          <About />
          {/* <!-- /ABOUT --> */}

          {/* <!-- SKILLS --> */}
          <Skills />
          {/* <!-- /SKILLS --> */}

          {/* <!-- PROJECTS --> */}
          <Projects />
          {/* <!-- /PROJECTS --> */}

          {/* <!-- CONTACT & FOOTER --> */}
          <Contact />
          {/* <!-- /CONTACT & FOOTER --> */}
        </div>
      </div>
    </>
  );
}
