"use client";
"@ts-ignore";
import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "./HomeScreen.component.css";
import DesktopHeader from "@/app/Layouts/DesktopHeader/DesktopHeader.component";
import gsap from "gsap";
import Image from "next/image";
import heroImg from "../../../../public/assets/hero-bg.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import {
  OrbitControls,
  PresentationControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import FooterLayout from "@/app/Layouts/FooterLayout/FooterLayout.component";
import Navbutton from "@/app/common/Navbutton/Navbutton";
export interface HomeScreenProps {
  children?: React.ReactNode;
}

let dirLight: any;
let modelRef: any;
function Model(props: any) {
  // useThree(({ camera }) => {
  //   camera.position.y = 0;
  //   camera.position.x = 3;
  //   // camera.lookAt(0, 0, 0);
  // });
  const { scene } = useGLTF("/assets/scene2.glb");
  {
    // useHelper(dirLight, PointLightHelper);
  }
  const { camera } = useThree();

  const updateLightPosition = (x: any, y: any) => {
    gsap.to(dirLight.current.position, {
      x: x,
      y: y,
      z: 2,
      duration: 0.1,
      ease: "power2.inOut",
    });
  };

  const updateModelPosition = (x: any) => {
    const moveDistance = 0.2; // Adjust the distance as needed
    const targetX = x > 0 ? -moveDistance : moveDistance;

    gsap.to(modelRef.current.position, {
      x: targetX,
      duration: 0.2,
      ease: "power2.inOut",
    });
  };
  useFrame(({ mouse }) => {
    // Update camera position based on mouse (for OrbitControls)
    // camera.position.x += (mouse.x * 5 - camera.position.x) * 0.05;
    // camera.position.y += (-mouse.y * 5 - camera.position.y) * 0.05;
    // camera.position.x;
    camera.lookAt(0, 0, 0);
    updateLightPosition(mouse.x, mouse.y);
    updateModelPosition(mouse.x);
  });

  return (
    <primitive className="model" ref={modelRef} object={scene} {...props} />
  );
}

const handleMouseDown = (event: any) => {
  // Disable rotation on left mouse click
  if (event.button === 0) {
    event.stopPropagation();
  }
};
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
  const projectTitles = {
    title1: ["NOTES", "PRO"],
  };
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
  const controls: any = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 10, y: 0 });
  const [light, setLight] = useState(false);
  dirLight = useRef(null);
  modelRef = useRef(null);

  useLayoutEffect(() => {
    gsapAction();
    controls.enablePan = false;
  }, []);

  useEffect(() => {
    // Wait for the model to load
    if (modelRef.current) {
      // Set the initial position of the model
      const initialModelPosition = { x: 0, y: 0, z: 0 };
      gsap.set(modelRef.current.position, {
        x: 0,
        y: 0,
        z: 0,
      });

      // Set the initial position of the light in front of the model
      dirLight.current.position.set(0, 0, 5);
    }
  }, [modelRef]);

  const handleMouseMove = (e: any) => {
    // setMousePosition = (e.clientX / window.innerWidth) * 2 - 1;
    // mousePosition.current.y = -(e.clientY / window.innerHeight) * 2 + 1;

    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });

    console.log("hhhhhh");
  };
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
        // markers: true,
      },
    });
    const featuredItemsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "2300px",
        end: "+=200px",
        // scrub: true,
        // markers: true,
      },
    });
    const featuredItemTimeline1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "2300px",
        end: "+=800px",
        // scrub: true,
        markers: true,
      },
    });
    const featuredItemTimeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "2800px",
        end: "+=800px",
        // scrub: true,
        markers: true,
      },
    });
    const featuredItemTimeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "3500px",
        end: "+=800px",
        // scrub: true,
        markers: true,
      },
    });
    const featuredItemImageTimeline1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "1900px",
        end: "+=1000px",
        scrub: true,
        markers: true,
      },
    });
    const featuredItemImageTimeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "2800px",
        end: "+=1000px",
        scrub: true,
        markers: true,
      },
    });
    const featuredItemImageTimeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "3500px",
        end: "+=1000px",
        scrub: true,
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
      // marginLeft: 0,
      // stagger: 0.07,
      // duration: 1,
      // ease: "expo.out",
    });

    featuredItemTimeline1.add("start").to(
      ".featured-span2",
      {
        y: 0,
        duration: 1,
        ease: "expo.out",
      },
      "start",
    );
    featuredItemTimeline2.add("start").to(
      ".featured-span3",
      {
        y: 0,
        duration: 1,
        ease: "expo.out",
      },
      "start",
    );
    featuredItemTimeline3.add("start").to(
      ".featured-span4",
      {
        y: 0,
        duration: 1,
        ease: "expo.out",
      },
      "start",
    );
    featuredItemImageTimeline1
      .add("start")
      .to(
        ".featured-image",
        {
          y: "-200px",
          duration: 1,
          ease: "expo.out",
        },
        "start",
      )
      .to(".wrapper1", {
        x: 0,
        duration: 1,
        ease: "expo.out",
      });
    featuredItemImageTimeline2
      .add("start")
      .to(
        ".featured-image2",
        {
          y: "-50px",
          duration: 1,
          ease: "expo.out",
        },
        "start",
      )
      .to(".wrapper2", {
        x: 0,
        duration: 1,
        ease: "expo.out",
      });
    featuredItemImageTimeline3
      .add("start")
      .to(
        ".featured-image3",
        {
          y: "-50px",
          duration: 1,
          ease: "expo.out",
        },
        "start",
      )
      .to(".wrapper3", {
        x: 0,
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
      <div className="nav-btn">
        <Navbutton />
      </div>
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
                  <div className="image-wrapper wrapper1">
                    <Image
                      className="featured-image image"
                      width={100}
                      height={200}
                      alt=""
                      unoptimized
                      src={"/assets/image1.jpg"}
                    ></Image>
                  </div>
                  <div
                    className="title-section"
                    data-scroll
                    data-scroll-speed="0.2"
                  >
                    <h1>
                      <span className="featured-span2">
                        {projectTitles.title1[0]}
                      </span>
                    </h1>
                    <h1>
                      <span className="featured-span2">
                        {projectTitles.title1[1]}
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="featured-item featured-item-reverse">
                  <div className="image-wrapper wrapper2">
                    <Image
                      className="featured-image2 image"
                      width={100}
                      height={200}
                      alt=""
                      unoptimized
                      src={"/assets/image2.jpg"}
                    ></Image>
                  </div>
                  <div
                    className="title-section"
                    data-scroll
                    data-scroll-speed="0.2"
                  >
                    <h1>
                      <span className="featured-span3">
                        {projectTitles.title1[0]}
                      </span>
                    </h1>
                    <h1>
                      <span className="featured-span3">
                        {projectTitles.title1[1]}
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="featured-item">
                  <div className="image-wrapper wrapper3">
                    <Image
                      className="featured-image3 image"
                      width={100}
                      height={200}
                      alt=""
                      unoptimized
                      src={"/assets/image3.jpg"}
                    ></Image>
                  </div>
                  <div
                    className="title-section"
                    data-scroll
                    data-scroll-speed="0.2"
                  >
                    <h1>
                      <span className="featured-span4">
                        {projectTitles.title1[0]}
                      </span>
                    </h1>
                    <h1>
                      <span className="featured-span4">
                        {projectTitles.title1[1]}
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="view-all">View All Works.</h3>
          </div>
        </section>

        <section className="three-model" onMouseMove={handleMouseMove}>
          <Canvas
            // camera={{ position: [-5, 2, 10], fov: 60 }}
            className="canvas"
            dpr={[1, 2]}
            // flat
            // linear
            // shadows
            camera={{ fov: 50 }}
            style={{ position: "absolute" }}
            onPointerDown={handleMouseDown}
          >
            <color args={["#00000000"]} />
            {/* <pointLight position={[10, 0, -20]} intensity={2.0} /> */}
            {/* {/* <ambientLight intensity={0.5} /> */}
            {/* <spotLight position={[10, 15, 10]} angle={0.3} />
            <directionalLight
              position={[-10, 0, -20]}
              color={0x6b69fa}
              intensity={3}
            /> */}
            {
              <pointLight
                ref={dirLight}
                position={[0, 0, 0]}
                color={0xe64c4c}
                intensity={5}
              />
            }
            {/* <directionalLightHelper light={dirLight} /> */}
            {/* <directionalLight
              
              position={[5, 10, -10]}
              color={0x2a949b}
              intensity={3}
            /> */}
            <OrbitControls
              enabled={true}
              enableZoom={false}
              autoRotate={false}
              rotateSpeed={1.5}
              enablePan={false}
              enableRotate={false}
            />
            {/* <PresentationControls
              speed={1.5}
              global
              zoom={2.0}
              polar={[-0.1, Math.PI / 4]}
              enabled={false}
            > */}
            <Suspense fallback={null}>
              <Stage intensity={0.6} castShadow={false} environment={null}>
                {/* <Environment path="/assets/" files={"venice.hdr"} /> */}
                <Model scale={1.8} />
              </Stage>
            </Suspense>
            {/* </PresentationControls> */}
          </Canvas>

          <div
            className="light-wrapper"
            onMouseEnter={() => {
              setLight(true);
            }}
            onMouseLeave={() => {
              setLight(false);
            }}
          ></div>
        </section>

        <section className="footer-section">{<FooterLayout />}</section>
      </div>
    </div>
  );
};

export default HomeScreen;
