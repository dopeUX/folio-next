"use client";
import React, { useEffect } from "react";
import "./AppLayout.component.css";
import DesktopHeader from "../DesktopHeader/DesktopHeader.component";
import Navbutton from "@/app/common/Hamburger/Hamburger";

export interface AppLayoutProps {
  children?: React.ReactNode;
  ref?: any;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, ref }) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div ref={ref} className="app-screen">
      <DesktopHeader />
      <Navbutton />
      {children}
    </div>
  );
};

// export const getLayout = (page: any) => <AppLayout>{page}</AppLayout>;

export default AppLayout;
