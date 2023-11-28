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
    gsap.to(".hero-img", {
      width: "47%",
      height: "70vh",
      duration: 1,
      ease: "power2",
      //   scale: 1.5,
      delay: 1,
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
            <section className="desc-text">
              <p>BBBoutique experiences that are</p>
              <p>holistic, intentional, and express</p>
              <p>the heart of your brand.</p>
            </section>

            {/* </div> */}
          </section>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;
