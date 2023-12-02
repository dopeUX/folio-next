"use client";
import React, { useEffect } from "react";
import "./AppLayout.component.css";

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
      {children}
    </div>
  );
};

export default AppLayout;
