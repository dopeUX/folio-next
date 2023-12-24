"use client";
import { useEffect, useState } from "react";
import AppLayout from "../Layouts/AppLayout/AppLayout.component";
import HomeScreen from "../Screens/HomeScreen/HomeScreen.component";
import "../global-styles/globalStyles.css";
import LocomotiveScroll from "locomotive-scroll";
import NavigationLayoutWhite from "../Layouts/NavigationLayoutWhite/NavigationLayoutWhite";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import OverlapLoadingLayout from "../Layouts/OverlapLoadingLayout/OverlapLoadingLayout";
import DesktopHeader from "../Layouts/DesktopHeader/DesktopHeader.component";
import Navbutton from "../common/Hamburger/Hamburger";

const Home = () => {
  const showNav = useSelector((state: RootState) => {
    return state.AppReducer.showNavPage;
  });
  const overlapLoading = useSelector((state: RootState) => {
    return state.AppReducer.overlapLoadingPage;
  });
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
      {/* <DesktopHeader /> */}
      {overlapLoading && <OverlapLoadingLayout />}
      {showNav && <NavigationLayoutWhite />}
      <Navbutton />
      <HomeScreen />
    </AppLayout>
  );
};

export default Home;
