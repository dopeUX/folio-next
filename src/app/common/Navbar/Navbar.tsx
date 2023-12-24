"use client";
import React from "react";
import "./Navbar.css";
import navItems, { navItemsProps } from "@/app/constants/navItems";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateOverlapLoadingPage } from "@/app/store/AppSlice";

export interface NavbarProps {
  children?: any;
  click?: any;
}

const Navbar: React.FC<NavbarProps> = ({ children, click }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      {navItems.map((item: navItemsProps, index) => {
        return (
          <h1
            key={item.id}
            className="dahlia-span"
            onClick={() => {
              click();
              dispatch(updateOverlapLoadingPage(true));
              setTimeout(() => {
                dispatch(updateOverlapLoadingPage(false));
                router.push("/work");
              }, 3000);
            }}
          >
            {item.title}
          </h1>
        );
      })}
    </div>
  );
};

export default Navbar;
