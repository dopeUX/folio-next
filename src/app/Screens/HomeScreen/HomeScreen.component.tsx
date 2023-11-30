"use client";
import React, { useLayoutEffect } from "react";
import "./HomeScreen.component.css";
import DesktopHeader from "@/app/Layouts/DesktopHeader/DesktopHeader.component";
import gsap from "gsap";
import Image from "next/image";
import heroImg from "../../../../public/assets/hero-bg.jpg";
// import _ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import _ScrollSmoother from "gsap/ScrollSmoother";
export interface HomeScreenProps {
  children?: React.ReactNode;
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const text1 = "EMBARK-ON-A";
  const text2 = "DIGITAL-ODYSSEY";
  const desc1 = "BBBoutique  Experiences  That  Are";
  const desc2 = "Holistic  Intentional  And  Express";
  const desc3 = "The  Heart  Of  Your  Brand.";
  const tagline = "Design,  Code,  AI";
  const name = "Shreyash.";

  useLayoutEffect(() => {
    gsapAction();
  }, []);

  const gsapAction = () => {
    const txt = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger, _ScrollSmoother);
    gsap.set(".hero-head-span1", { skewY: 40, skewX: -20 });
    gsap.set(".hero-head-span2", { skewY: 40, skewX: -20 });
    gsap.to(".hero-head-span1", {
      y: 0,
      stagger: 0.05,
      duration: 1,
      skewY: 0,
      skewX: 0,
      // rotate: 0,
      ease: "power4.out",
    });
    gsap.to(".hero-head-span2", {
      y: 0,
      stagger: 0.05,
      duration: 1,
      rotate: 0,
      skewX: 0,
      skewY: 0,
      ease: "power4.out",
    });
    gsap.to(".desc-section-span1", {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power1",
    });
    gsap.to(".desc-section-span2", {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power1",
    });
    gsap.to(".desc-section-span3", {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power1",
    });
    gsap.to(".tagline-span1", {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power1",
    });
    gsap.to(".tagline-span2", {
      y: 0,
      stagger: 0.05,
      duration: 1,
      delay: 2.8,
      ease: "power1",
    });
    gsap.to(".hero-img", {
      width: "40%",
      height: "70vh",
      duration: 1,
      top: "1rem",
      ease: "power4.out",
      //   scale: 1.5,
      delay: 2,
      stagger: {
        amount: 1.5,
        grid: "auto",
        from: "center",
      },
      //   scale: 2.0,
    });
  };
  return (
    <div className="home-screen" data-speed="0.5">
      <Image className="hero-img" src={heroImg} alt="" />
      <div className="header">
        <DesktopHeader />
      </div>
      <div className="content">
        <section className="home-hero global-container">
          <section className="left-col">
            {/* <div className="hero-head-wrapper"> */}
            <h1 className="hero-head">
              {text1.split("").map((item, index) => {
                if (item === "-") {
                  return (
                    <span className="hero-head-span1" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span className="hero-head-span1" key={index}>
                    {item}
                  </span>
                );
              })}
            </h1>
            <h1 className="hero-head">
              {text2.split("").map((item, index) => {
                if (item === "-") {
                  return (
                    <span className="hero-head-span2" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span className="hero-head-span2" key={index}>
                    {item}
                  </span>
                );
              })}
            </h1>
            {/* <h1 className="hero-head">
              <span className="span">Odyssey</span>
            </h1> */}
            <section className="desc-section">
              <p className="desc">
                {desc1.split(" ").map((item, index) => {
                  if (!item) {
                    return (
                      <span className="desc-section-span1" key={index}>
                        &nbsp;
                      </span>
                    );
                  }
                  return (
                    <span className="desc-section-span1" key={index}>
                      {item}
                    </span>
                  );
                })}
              </p>
              <p className="desc">
                {desc2.split(" ").map((item, index) => {
                  if (!item) {
                    return (
                      <span className="desc-section-span2" key={index}>
                        &nbsp;
                      </span>
                    );
                  }
                  return (
                    <span className="desc-section-span2" key={index}>
                      {item}
                    </span>
                  );
                })}
              </p>
              <p className="desc">
                {desc3.split(" ").map((item, index) => {
                  if (!item) {
                    return (
                      <span className="desc-section-span3" key={index}>
                        &nbsp;
                      </span>
                    );
                  }
                  return (
                    <span className="desc-section-span3" key={index}>
                      {item}
                    </span>
                  );
                })}
              </p>
            </section>

            {/* </div> */}
          </section>

          <div className="about-tagline-section">
            <p className="shr">
              {name.split("").map((item, index) => {
                return (
                  <span className="tagline-span1" key={index}>
                    {item}
                  </span>
                );
              })}
            </p>
            <p className="shr">
              {tagline.split(" ").map((item, index) => {
                if (!item) {
                  return (
                    <span className="tagline-span2" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span className="tagline-span2" key={index}>
                    {item}
                  </span>
                );
              })}
            </p>
          </div>
        </section>

        <section className="bon-container global-container">
          {/* <h1>BONSOIR!</h1> */}
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;
