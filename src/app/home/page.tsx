"use client";
import { useEffect } from "react";
import AppLayout from "../Layouts/AppLayout/AppLayout.component";
import HomeScreen from "../Screens/HomeScreen/HomeScreen.component";
import "../global-styles/globalStyles.css";
import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <AppLayout>
      <HomeScreen />
    </AppLayout>
  );
};

export default Home;
