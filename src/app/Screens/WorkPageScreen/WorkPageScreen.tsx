import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./WorkPageScreen.css";
import gsap from "gsap";
import workData from "@/app/constants/projectData";
import ProjectItem from "@/app/common/ProjectItem/ProjectItem";
import useHorizontalScroll from "@/app/hooks/useHorizontalScroll";
import useLocoScroll from "@/app/hooks/useLocoHook";
import LocomotiveScroll from "locomotive-scroll";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
export interface WorkPageProps {
  children?: React.ReactNode;
}

const WorkPageScreen: React.FC<WorkPageProps> = () => {
  const horizontalScrollDiv: any = useHorizontalScroll();
  // const horizontalScrollDiv: any = useRef(null);

  useLayoutEffect(() => {
    gsap.to(".head-span1", {
      y: 0,
      delay: 0,
      duration: 1.6,
      ease: "expo.inOut",
    });
    gsap.to(".head-span2", {
      y: 0,
      delay: 0.1,
      duration: 1.6,
      ease: "expo.inOut",
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const lscroll: any = new LocomotiveScroll({
      smooth: true,
      getDirection: true,
      direction: "horizontal",
    });
  }, []);

  return (
    <div className="work-page" data-scroll-container>
      <div className="content">
        <h1 className="dahlia-span">
          <span className="head-span1">Embark on a</span>
        </h1>
        <h1 className="dahlia-span">
          <span className="head-span2">Digital Odyssey</span>
        </h1>

        <section className="projects">
          <ReactLenis
            root={false}
            options={{
              orientation: "horizontal",
              gestureOrientataion: "both",
            }}
          >
            <ul
              id="scrollable"
              data-scroll-section
              ref={horizontalScrollDiv}
              className="projects-list"
            >
              {workData.map((item, index) => {
                return (
                  <li key={item.id}>
                    <ProjectItem
                      id={item.id}
                      onHover={() => {
                        gsap.to(`.wrapper${item.id}`, {
                          opacity: 1,
                          ease: "expo.inOut",
                          duration: 0.5,
                        });
                        gsap.to(`.player${item.id}`, {
                          opacity: 1,
                          ease: "expo.inOut",
                          duration: 0.5,
                        });
                      }}
                      onLeave={() => {
                        gsap.to(`.wrapper${item.id}`, {
                          opacity: 0,
                          ease: "expo.inOut",
                          duration: 0.5,
                        });
                        gsap.to(`.player${item.id}`, {
                          opacity: 0,
                          ease: "expo.inOut",
                          duration: 0.5,
                        });
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </ReactLenis>
        </section>
      </div>
    </div>
  );
};

export default WorkPageScreen;
