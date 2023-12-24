import React from "react";
import "./Hamburger.css";
import { useDispatch } from "react-redux";
import { updateNavPageState } from "@/app/store/AppSlice";

export interface NavbutttonProps {}
const Navbutton: React.FC<NavbutttonProps> = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="nav-button"
      onClick={() => {
        dispatch(updateNavPageState(true));
      }}
    >
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
};

export default Navbutton;
