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
import { motion } from "framer-motion";

export interface WorkPageProps {
  children?: React.ReactNode;
}

const WorkPageScreen: React.FC<WorkPageProps> = () => {
  const horizontalScrollDiv: any = useHorizontalScroll();
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const variants: any = {
    default: {
      x: cursorX - 16,
      y: cursorY - 16,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      width: 200,
      height: 200,
      x: cursorX - 75,
      y: cursorY - 75,
      borderRadius: 0,
      backgroundColor: "#d9d9d9",
      // backdropFilter: "blur(10px)",
      mixBlendMode: "difference",
    },
    text: {
      width: 200,
      height: 200,
      borderRadius: "50%",
      x: cursorX - 75,
      y: cursorY - 75,
      background:
        "url(https://i.pinimg.com/originals/2e/68/8d/2e688dc2a07cee44c3d8f1f7f6d547b4.gif)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      mixBlendMode: "difference",
    },
    closeBtn: {
      width: 80,
      height: 80,
      x: cursorX - 75,
      y: cursorY - 75,
      mixBlendMode: "difference",
    },
  };
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

    gsap.to(".first-child", {
      marginLeft: "1rem",
      delay: 0.5,
      duration: 2.5,
      stagger: 0.1,
      ease: "expo.inOut",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", (e: any) => {
      console.log(e.clientX, e.clientY, "sss");
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    });
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const lscroll: any = new LocomotiveScroll({
      smooth: true,
      getDirection: true,
      direction: "horizontal",
    });
    lscroll.start();
  }, []);

  const updateCursorVariant = (index: number) => {
    setCursorVariant("project");
  };
  return (
    <div className="work-page" data-scroll-container>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "tween",
          stiffness: 500,
          damping: 28,
        }}
      ></motion.div>
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
                  <li className={`first-child`} key={item.id}>
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
                        setCursorVariant("text");
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
                        setCursorVariant("default");
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
