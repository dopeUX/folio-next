import React from "react";
import "./FooterLayout.component.css";

export interface FooterLayoutProps {
  children?: React.ReactNode;
}

const FooterLayout: React.FC<FooterLayoutProps> = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <section className="left-col">
          <h3 className="text1">Bichess Lie, compilers don’t!</h3>
          <h2>Work.</h2>
          <h2>About.</h2>
        </section>

        <section className="right-col">
          <h3>
            <span>De.</span>
          </h3>
        </section>
      </div>
    </div>
  );
};

export default FooterLayout;
