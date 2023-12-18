import React from "react";
import "./Navbutton.css";

export interface NavbutttonProps {}
const Navbutton: React.FC<NavbutttonProps> = () => {
  return (
    <div className="nav-button">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
};

export default Navbutton;
