"use client";
import React, { useLayoutEffect } from "react";
import "./HomeScreen.component.css";
import DesktopHeader from "@/app/Layouts/DesktopHeader/DesktopHeader.component";
import gsap from "gsap";
import SplitType from "split-type";
import { useRouter } from "next/navigation";
import Image from "next/image";
import heroImg from "../../../../public/assets/hero-bg.jpg";

export interface HomeScreenProps {
  children?: React.ReactNode;
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const router = useRouter();
  const text1 = "EMBARK-ON-A";
  const text2 = "DIGITAL-ODYSSEY";
  const desc1 = "BBBoutique  Experiences  That  Are";
  const desc2 = "Holistic  Intentional  And  Express";
  const desc3 = "The  Heart  Of  Your  Brand.";
  const name = "Shreyash";
  useLayoutEffect(() => {
    // const hero = new SplitType(".span");
    gsap.to(".span", {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power1",
    });
    gsap.to(".span2", {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power1",
    });
    gsap.to(".span3", {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power1",
    });
    gsap.to(".span4", {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power1",
    });
    gsap.to(".span5", {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power1",
    });
    gsap.to(".span6", {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power1",
    });
    gsap.to(".hero-img", {
      width: "47%",
      height: "70vh",
      duration: 1,
      ease: "power2",
      //   scale: 1.5,
      delay: 2,
      stagger: {
        amount: 1.5,
        grid: "auto",
        from: "center",
      },
      //   scale: 2.0,
    });
  }, []);
  return (
    <div className="home-screen">
      <Image className="hero-img" src={heroImg} alt="" />
      <div className="content">
        <div className="header">
          <DesktopHeader />
        </div>
        <section className="home-hero global-container">
          <section className="left-col">
            {/* <div className="hero-head-wrapper"> */}
            <h1 className="hero-head">
              {text1.split("").map((item, index) => {
                if (item === "-") {
                  return (
                    <span className="span" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span className="span" key={index}>
                    {item}
                  </span>
                );
              })}
            </h1>
            <h1 className="hero-head">
              {text2.split("").map((item, index) => {
                if (item === "-") {
                  return (
                    <span className="span2" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span className="span2" key={index}>
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
                      <span className="span3" key={index}>
                        &nbsp;
                      </span>
                    );
                  }
                  return (
                    <span className="span3" key={index}>
                      {item}
                    </span>
                  );
                })}
              </p>
              <p className="desc">
                {desc2.split(" ").map((item, index) => {
                  if (!item) {
                    return (
                      <span className="span4" key={index}>
                        &nbsp;
                      </span>
                    );
                  }
                  return (
                    <span className="span4" key={index}>
                      {item}
                    </span>
                  );
                })}
              </p>
              <p className="desc">
                {desc3.split(" ").map((item, index) => {
                  if (!item) {
                    return (
                      <span className="span5" key={index}>
                        &nbsp;
                      </span>
                    );
                  }
                  return (
                    <span className="span5" key={index}>
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
                  <span className="span6" key={index}>
                    {item}
                  </span>
                );
              })}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;
