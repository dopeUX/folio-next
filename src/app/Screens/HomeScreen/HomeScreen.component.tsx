"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./HomeScreen.component.css";
import DesktopHeader from "@/app/Layouts/DesktopHeader/DesktopHeader.component";
import gsap from "gsap";
import Image from "next/image";
import heroImg from "../../../../public/assets/hero-bg.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactPlayer from "react-player";
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
  const allTech = "AAAAAll  About  Tech.";
  const cook = "LLLLLet  Me  Cook!";
  const bonsoir = "Bonsoir!";
  const scrollRef: any = useRef();
  const bgRef: any = useRef();
  const bonDesc: string =
    "Lorem  Ipsum  is  simply  dummy  text  of  the  printing  and   ";
  const bonDesc2: string =
    "typesetting  industry.  Lorem  Ipsum  has  been  the  industry's  standard  dummy  text  ever  since  the  1500s,  ";
  const bonDesc3 =
    "when  an  unknown  printer  took  a  galley   of  type  and  scrambled  it  to  make  a  type  specimen  book.";
  const featured = "fffffeatured.";
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsapAction();
  }, []);

  const gsapAction = () => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "200px",
        end: "+=600px",
        // scrub: true,
        // markers: true,
      },
    });
    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "300px",
        end: "+=300px",
        // scrub: true,
        // markers: true,
      },
    });
    const timeline3 = gsap.timeline({
      //for let me cook -----
      scrollTrigger: {
        trigger: document.documentElement,
        start: "600px",
        end: "+=600px",
        scrub: true,
        // markers: true,
      },
    });

    const timeline4 = gsap.timeline({
      //for video-container
      scrollTrigger: {
        trigger: document.documentElement,
        start: "1200px",
        end: "+=300px",
        scrub: true,
        // markers: true,
      },
    });

    const timeline5 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "2000px",
        end: "+=300px",
        scrub: true,
        // markers: true,
      },
    });

    const featuredTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "2200px",
        end: "+=200px",
        // scrub: true,
        markers: true,
      },
    });
    const featuredItemsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "2300px",
        end: "+=200px",
        // scrub: true,
        markers: true,
      },
    });
    timeline.set(".bon-span1", { skewY: 40, skewX: -20 });
    timeline.to(".bon-span1", 1, {
      y: 0,
      skewY: 0,
      skewX: 0,
      ease: "expo.out",
      // fontSize: "15rem",
      stagger: 0.05,
    });
    timeline2.to(".bon-span2", {
      y: 0,
      skewY: 0,
      skewX: 0,
      // delay: 1,
      ease: "expo.out",
      stagger: 0.05,
    });

    timeline2
      .add("start")
      .to(
        ".bon-span3",
        0.5,
        {
          y: 0,
          stagger: 0,
          delay: 0.3,
          ease: "expo.out",
        },
        "start",
      )
      .to(
        ".bon-span4",
        0.7,
        {
          y: 0,
          stagger: 0,
          delay: 0.3,
          ease: "expo.out",
        },
        "start",
      )
      .to(
        ".bon-span5",
        0.9,
        {
          y: 0,
          stagger: 0,
          delay: 0.3,
          ease: "expo.out",
        },
        "start",
      );

    timeline3.to(".bon-span6", {
      y: 0,
      ease: "expo.out",
      fontSize: "10rem",
    });

    timeline4.to(".player-wrapper", {
      y: 0,
      width: "100%",
    });
    timeline5.to(".player-wrapper", {
      width: "90%",
    });
    // gsap.to(".bon-span1", {
    //   y: 0,
    //   stagger: 0.05,
    //   duration: 1,
    //   delay: 2.8,
    //   ease: "power1",
    // });

    // gsap.registerPlugin(ScrollTrigger, _ScrollSmoother);
    // gsap.to(".marquee-sec", {
    //   // xPercent: 100,
    //   // repeat: -1,
    //   // duration: 5,
    //   ease: "linear",
    // });
    // .totalProgress(0.5);
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
    featuredItemsTimeline.to(".image-wrapper", {
      marginLeft: 0,
      stagger: 0.07,
      duration: 1,
      ease: "expo.out",
    });

    // gsap.set(".featured-span1", {
    //   scrollTrigger: {
    //     trigger: document.documentElement,
    //     start: "1900px",
    //     end: "+=300px",
    //     scrub: true,
    //     markers: true,
    //   },
    //   skewY: 50,
    //   skewX: -40,
    // });
    featuredTimeline.set(".featured-span1", { skewY: 40, skewX: -20 });
    featuredTimeline.to(".featured-span1", 1, {
      y: 0,
      stagger: 0.05,
      duration: 1,
      skewY: 0,
      skewX: 0,
      rotate: 0,
      ease: "expo.out",
    });
    featuredTimeline.to(".featured-span1", 0.7, {
      // fontSize: "3rem",
      delay: 0,
      ease: "expo.out",
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
    <div className="home-screen" ref={scrollRef}>
      <Image
        className="hero-img"
        data-scroll
        data-scroll-speed="0.3"
        src={heroImg}
        ref={bgRef}
        alt=""
      />
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
          <h1 className="bonsoir">
            {bonsoir.split("").map((item, index) => {
              return (
                <span className="bon-span1" key={index}>
                  {item}
                </span>
              );
            })}
          </h1>

          <div className="tech-section">
            <h3>
              {allTech.split(" ").map((item, index) => {
                if (!item) {
                  return (
                    <span className="bon-span2" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span className="bon-span2" key={index}>
                    {item}
                  </span>
                );
              })}
            </h3>

            <p className="desc">
              {/* <div className="dot"></div> */}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {bonDesc.split(" ").map((item, index) => {
                if (!item) {
                  return (
                    <span className="bon-span3" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span className="bon-span3" key={index}>
                    {item}
                  </span>
                );
              })}
              {bonDesc2.split(" ").map((item, index) => {
                if (!item) {
                  return (
                    <span className="bon-span4" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span className="bon-span4" key={index}>
                    {item}
                  </span>
                );
              })}
              {bonDesc3.split(" ").map((item, index) => {
                if (!item) {
                  return (
                    <span className="bon-span5" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span className="bon-span5" key={index}>
                    {item}
                  </span>
                );
              })}
            </p>

            <div className="cook">
              <h3 className="cook-head">
                {cook.split(" ").map((item, index) => {
                  return (
                    <span key={index} className="bon-span6">
                      {item}
                    </span>
                  );
                })}
              </h3>
            </div>
          </div>
        </section>

        {/* <div className="marquee-sec">
          <h2>JavaScript.</h2>
          <h2>JavaScript.</h2>
          <h2>JavaScript.</h2>
          <h2>JavaScript.</h2>
          <h2>JavaScript.</h2>
          <h2>JavaScript.</h2>
          <h2>JavaScript.</h2>
          <h2>JavaScript.</h2>
          <h2>JavaScript.</h2>
          <h2>JavaScript.</h2>
        </div> */}
        <section className="featured-work">
          <div className="content">
            <div className="player-wrapper">
              <h2>
                BBBoutique experiences that are holistic, intentional, and
                express the heart of your brand.
              </h2>
              <video className="player" autoPlay loop muted>
                <source src="/assets/video1.mp4" type="video/mp4"></source>
              </video>
            </div>

            <div className="featured global-container">
              <h2>
                {featured.split("").map((item, index) => {
                  return (
                    <span key={index} className="featured-span1 dahlia-span">
                      {item}
                    </span>
                  );
                })}
              </h2>

              <div className="featured-items">
                <div className="featured-item">
                  <div className="image-wrapper">
                    <Image
                      className="featured-image"
                      width={100}
                      height={200}
                      alt=""
                      unoptimized
                      src={"/assets/image1.jpg"}
                    ></Image>
                  </div>
                  <h1>NOTES PRO</h1>
                </div>
                {/* <div className="image-wrapper">
                  <Image
                    className="featured-image"
                    width={100}
                    height={200}
                    alt=""
                    unoptimized
                    src={"/assets/image2.jpg"}
                  ></Image>
                </div>
                <div className="image-wrapper">
                  <Image
                    className="featured-image"
                    width={100}
                    height={200}
                    alt=""
                    unoptimized
                    src={"/assets/image3.jpg"}
                  ></Image>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;
