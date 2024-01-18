import React, { useEffect, useState } from "react";

import MobileMenu from "../components/mobile/MobileMenu";
import PreLoader from "../components/PreLoader";
import LeftPart from "../components/LeftPart";
import RightPart from "../components/RightPart";
import { FloatButton } from "antd";
import { isMobile } from "react-device-detect";

export default function Portfolio() {
  const [hideLeftPart, setHideLeftPart] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setHideLeftPart(true);
    }
  }, []);

  return (
    <div className="arlo_tm_wrapper_all">
      <div id="arlo_tm_popup_blog">
        <div className="container">
          <div className="inner_popup scrollable"></div>
        </div>
        <span className="close">
          <a href="#"></a>
        </span>
      </div>

      <PreLoader />

      {/* <!-- MOBILE MENU --> */}
      <MobileMenu />
      {/* <!-- /MOBILE MENU --> */}

      {/* <!-- CONTENT --> */}
      <div className="arlo_tm_content">
        {/* <!-- LEFTPART --> */}
        <LeftPart
          hideLeftPart={hideLeftPart}
          setHideLeftPart={setHideLeftPart}
        />
        {/* <!-- /LEFTPART --> */}

        {/* <!-- RIGHTPART --> */}
        <RightPart
          hideLeftPart={hideLeftPart}
          setHideLeftPart={setHideLeftPart}
        />
        {/* <!-- /RIGHTPART --> */}
        <FloatButton.BackTop
          onClick={() => {
            setTimeout(() => {
              window.location.hash = "#";
            }, 1000);
          }}
        />
      </div>
    </div>
  );
}
