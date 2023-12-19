import React, { Suspense, useEffect, useState } from "react";
import "./NavigationLayoutWhite.css";
import Navbar from "@/app/common/Navbar/Navbar";
import { motion } from "framer-motion";
export interface NavigationLayoutWhiteProps {
  children?: React.ReactNode;
}

const NavigationLayoutBlack: React.FC<NavigationLayoutWhiteProps> = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e: any) => {
      console.log(e.clientX, e.clientY, "sss");
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    });
  }, []);
  const [cursorVariant, setCursorVariant] = useState("default");
  const variants: any = {
    default: {
      x: cursorX - 16,
      y: cursorY - 16,
    },
    text: {
      width: 300,
      height: 150,
      borderRadius: 0,
      x: cursorX - 75,
      y: cursorY - 75,
      backgroundColor: "white",
      background:
        "url(https://i.pinimg.com/originals/9c/1e/ae/9c1eaefbfdea7ec4bed8674f012c2cf0.gif)",
      mixBlendMode: "difference",
    },
  };
  return (
    <div className="navigation-layout">
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{ duration: 0.3 }}
      ></motion.div>
      {/* <div
        className="custom-cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div> */}
      <div className="content">
        <div className="centre-content">
          <div
            className="navbar"
            onMouseEnter={() => {
              setCursorVariant("text");
            }}
            onMouseLeave={() => {
              setCursorVariant("default");
            }}
          >
            <Navbar />
          </div>
        </div>
        <div className="bottom-left-content">
          <p
            className="item"
            onMouseEnter={() => {
              setCursorVariant("text");
            }}
            onMouseLeave={() => {
              setCursorVariant("default");
            }}
          >
            linked in.
          </p>
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
