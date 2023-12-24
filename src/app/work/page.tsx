"use client";
import React from "react";
import WorkPageScreen from "../Screens/WorkPageScreen/WorkPageScreen";
import AppLayout from "../Layouts/AppLayout/AppLayout.component";
import DesktopHeader from "../Layouts/DesktopHeader/DesktopHeader.component";
import Navbutton from "../common/Hamburger/Hamburger";

const Work: React.FC<any> = () => {
  return (
    <AppLayout>
      {/* <DesktopHeader /> */}
      <Navbutton />
    </AppLayout>
  );
};

export default Work;
