import React, { Suspense, useState } from "react";
import "./NavigationLayoutBlack.css";

export interface NavigationLayoutBlackProps {
  children?: React.ReactNode;
}

const NavigationLayoutBlack: React.FC<NavigationLayoutBlackProps> = () => {
  return (
    <div className="navigation-layout">
      <div className="content">
        <div className="nav-items">
          <h3>Work.</h3>
          <h3>About.</h3>
          <h3>Reach.</h3>
        </div>
      </div>
    </div>
  );
};

export default NavigationLayoutBlack;
