"use client";
import Image from "next/image";
import AppLayout from "./Layouts/AppLayout/AppLayout.component";
import InitialLoadingScreen from "./Screens/InitialLoadingScreen/InitialLoadingScreen.component";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function Home() {
  return (
    <AppLayout>
      <InitialLoadingScreen />
    </AppLayout>
  );
}
