"use client";
import { useEffect, useState } from "react";
import AppLayout from "../Layouts/AppLayout/AppLayout.component";
import HomeScreen from "../Screens/HomeScreen/HomeScreen.component";
import "../global-styles/globalStyles.css";
import LocomotiveScroll from "locomotive-scroll";
import NavigationLayoutWhite from "../Layouts/NavigationLayoutWhite/NavigationLayoutWhite";

const Home = () => {
  const showNav = true;
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <AppLayout>
      {showNav && <NavigationLayoutWhite />}
      <HomeScreen />
    </AppLayout>
  );
};

export default Home;
