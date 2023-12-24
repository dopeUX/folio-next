import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "./NavigationLayoutWhite.css";
import Navbar from "@/app/common/Navbar/Navbar";
import { motion } from "framer-motion";
import { RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import { updateNavPageState } from "@/app/store/AppSlice";
export interface NavigationLayoutWhiteProps {
  children?: React.ReactNode;
}

const NavigationLayoutBlack: React.FC<NavigationLayoutWhiteProps> = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const showNavPage = useSelector((state: RootState) => {
    return state.AppReducer.showNavPage;
  });
  const dispatch = useDispatch();
  const navRef: any = useRef();
  useLayoutEffect(() => {
    if (showNavPage) {
      gsap.set(navRef.current, {
        opacity: 0,
      });
      gsap.to(navRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [showNavPage]);
  useEffect(() => {
    window.addEventListener("mousemove", (e: any) => {
      console.log(e.clientX, e.clientY, "sss");
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    });
  }, []);
  const [cursorVariant, setCursorVariant] = useState("default");
  const variants: any = {
    default: {
      x: cursorX - 16,
      y: cursorY - 16,
      transition: {
        type: "spring",
        mass: 0.6,
      },
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

  const closeDialog = () => {
    if (showNavPage) {
      gsap.to(navRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
      setTimeout(() => {
        dispatch(updateNavPageState(false));
      }, 600);
    }
  };
  return (
    <div className="navigation-layout" ref={navRef}>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      ></motion.div>
      {/* <div
        className="custom-cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div> */}
      <div className="content">
        <div
          className="close-btn-content"
          onClick={() => {
            closeDialog();
          }}
          onMouseEnter={() => {
            setCursorVariant("closeBtn");
          }}
          onMouseLeave={() => {
            setCursorVariant("default");
          }}
        >
          <div className="close-btn"></div>
        </div>
        <div className="centre-content">
          <div
            className="navbar"
            onMouseEnter={() => {
              setCursorVariant("text");
            }}
            onMouseLeave={() => {
              setCursorVariant("default");
            }}
          >
            <Navbar
              click={() => {
                closeDialog();
              }}
            />
          </div>
        </div>
        <div className="bottom-left-content">
          <p
            className="item"
            onMouseEnter={() => {
              setCursorVariant("text");
            }}
            onMouseLeave={() => {
              setCursorVariant("default");
            }}
          >
            linked in.
          </p>
          <p className="item">github.</p>
        </div>
        <div className="right-bottom-content">
          <h3>+919767582124</h3>
          <p className="item">©2023 all rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationLayoutBlack;
