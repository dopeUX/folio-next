"use client";
import { useEffect } from "react";
import AppLayout from "../Layouts/AppLayout/AppLayout.component";
import HomeScreen from "../Screens/HomeScreen/HomeScreen.component";
import "../global-styles/globalStyles.css";
import LocomotiveScroll from "locomotive-scroll";
import NavigationLayoutBlack from "../Layouts/NavigationLayoutBlack/NavigationLayoutBlack";

const Home = () => {
  const showNav = true;
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <AppLayout>
      {/* {showNav && <NavigationLayoutBlack />} */}
      <HomeScreen />
    </AppLayout>
  );
};

export default Home;
