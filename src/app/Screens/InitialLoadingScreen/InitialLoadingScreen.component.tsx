"use client";
import React, { ElementRef, useEffect, useRef, useLayoutEffect } from "react";
import "./InitialLoadingScreen.component.css";
import gsap from "gsap";
import { useRouter } from "next/navigation";

export interface InitialLoadingScreenProps {
  children?: React.ReactNode;
}

const InitialLoadingScreen: React.FC<InitialLoadingScreenProps> = () => {
  const dotRef: any = useRef();
  const titleRef: any = useRef();
  const containerRef: any = useRef();
  const router = useRouter();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, titleRef);
    setTimeout(() => {
      gsap.to(".content", {
        scale: "2.0",
        opacity: 0,
        duration: 1,
      });
      setTimeout(() => {
        router.push("/home");
      }, 1100);
    }, 4300);

    return () => ctx.revert();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      // titleRef.current.style.display = "inline-block";
      titleRef.current.style.animation = "revealText .8s forwards";
    }, 1500);
    setTimeout(() => {
      dotRef.current.style.animation = "slide-x-dot .8s forwards";
    }, 1500);

    setTimeout(() => {
      titleRef.current.style.animation = "demolish .8s forwards";
      containerRef.current.style.animation = "container-x .8s forwards";
      dotRef.current.style.animation = "slide-x-return .8s forwards";
    }, 2500);
  }, []);

  return (
    <div className="initial-loading-screen">
      <div className="content">
        <div className="title-sec">
          <div ref={containerRef} className="container">
            <h1 ref={titleRef} className="text-reveal">
              Desirius
            </h1>
          </div>
          <div className="dot-container-wrapper">
            <div id="dot" ref={dotRef} className="center-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialLoadingScreen;
