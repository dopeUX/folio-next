"use client";
import React, { useEffect, useRef } from "react";
import "./OverlapLoadingLayout.css";
import gsap from "gsap";

interface LoadingProps {
  children?: React.ReactNode;
}

const OverlapLoadingLayout: React.FC<LoadingProps> = ({}) => {
  const loadingPageRef: any = useRef();

  useEffect(() => {
    gsap.set(loadingPageRef.current, {
      opacity: 0,
    });
    gsap.to(loadingPageRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power4.out",
    });

    // gsap.from(".white-wrap", {
    //   y: "80%",
    // });
    gsap.to(".white-wrap", {
      y: 0,
      delay: 0.2,
      duration: 1.5,
      ease: "expo.inOut",
    });
  }, []);
  return (
    <div ref={loadingPageRef} className="loading-layout">
      <div className="white-wrap"></div>
    </div>
  );
};

export default OverlapLoadingLayout;
