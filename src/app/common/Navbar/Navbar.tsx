import React from "react";
import "./Navbar.css";

export interface NavbarProps {
  children?: any;
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="navbar">
      <h1 className="dahlia-span">Work.</h1>
      <h1 className="dahlia-span">About.</h1>
      <h1 className="dahlia-span">Reach.</h1>
    </div>
  );
};

export default Navbar;
