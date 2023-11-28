"use client";
import React, { useLayoutEffect } from "react";
import "./DesktopHeader.component.css";
import gsap from "gsap";
import SplitType from "split-type";

export interface DesktopHeaderProps {
  children?: React.ReactNode;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = () => {
  useLayoutEffect(() => {
    // const name = new SplitType(".name");
    gsap.to(".name", {
      y: 0,
      duration: 1,
      stagger: 0.05,
      delay: 2.8,
    });
  }, []);
  return (
    <div className="desktop-header global-container">
      <div className="content">
        <div className="left-col"></div>
        <div className="right-col">
          <div className="item">
            <p className="p name">India, 8.45 p.m.</p>
          </div>
          <div className="item">
            <p className="p name">index</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
