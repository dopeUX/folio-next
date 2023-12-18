import React, { Suspense, useEffect, useState } from "react";
import "./NavigationLayoutWhite.css";
import Navbar from "@/app/common/Navbar/Navbar";

export interface NavigationLayoutWhiteProps {
  children?: React.ReactNode;
}

const NavigationLayoutBlack: React.FC<NavigationLayoutWhiteProps> = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  useEffect(() => {
    window.addEventListener("mousemove", (e: any) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    });
  }, []);
  return (
    <div className="navigation-layout">
      <div
        className="custom-cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div>
      <div className="content">
        <div className="centre-content">
          <div className="navbar">
            <Navbar />
          </div>
        </div>
        <div className="bottom-left-content">
          <p className="item">linked in.</p>
          <p className="item">github.</p>
        </div>
        <div className="right-bottom-content">
          <h3>+919767582124</h3>
          <p className="item">©2023 all rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationLayoutBlack;
