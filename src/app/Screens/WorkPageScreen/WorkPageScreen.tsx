import React, { useLayoutEffect } from "react";
import "./WorkPageScreen.css";
import gsap from "gsap";
export interface WorkPageProps {
  children?: React.ReactNode;
}

const WorkPageScreen: React.FC<WorkPageProps> = () => {
  useLayoutEffect(() => {
    gsap.to(".head-span1", {
      y: 0,
      delay: 0,
      duration: 2,
      ease: "expo.inOut",
    });
    gsap.to(".head-span2", {
      y: 0,
      delay: 0.1,
      duration: 2,
      ease: "expo.inOut",
    });
  }, []);
  return (
    <div className="work-page">
      <div className="content">
        <h1 className="dahlia-span">
          <span className="head-span1">Embark on a</span>
        </h1>
        <h1 className="dahlia-span">
          <span className="head-span2">Digital Odyssey</span>
        </h1>
      </div>
    </div>
  );
};

export default WorkPageScreen;
