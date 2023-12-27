"use client";
import React, { useEffect } from "react";
import WorkPageScreen from "../Screens/WorkPageScreen/WorkPageScreen";
import AppLayout from "../Layouts/AppLayout/AppLayout.component";
import DesktopHeader from "../Layouts/DesktopHeader/DesktopHeader.component";
import Navbutton from "../common/Hamburger/Hamburger";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import OverlapLoadingLayout from "../Layouts/OverlapLoadingLayout/OverlapLoadingLayout";
import NavigationLayoutWhite from "../Layouts/NavigationLayoutWhite/NavigationLayoutWhite";

const Work: React.FC<any> = () => {
  const showNav = useSelector((state: RootState) => {
    return state.AppReducer.showNavPage;
  });
  const overlapLoading = useSelector((state: RootState) => {
    return state.AppReducer.overlapLoadingPage;
  });
  const test = useSelector((state: RootState) => {
    return state.AppReducer.testVar;
  });
  useEffect(() => {
    console.log(test, "ttttttt");
  }, []);

  return (
    <>
      {/* <DesktopHeader /> */}
      {overlapLoading && <OverlapLoadingLayout />}
      {showNav && <NavigationLayoutWhite />}
    </>
  );
};

export default Work;
