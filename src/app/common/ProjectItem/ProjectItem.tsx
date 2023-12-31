import Image from "next/image";
import React from "react";
import "./ProjectItem.css";
import gsap from "gsap";

export interface ProjectItemProps {
  children?: React.ReactNode;
  onHover?: any;
  onLeave?: any;
  id: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ onHover, onLeave, id }) => {
  return (
    <div className="project-item">
      <div
        className="image-wrapper"
        onMouseEnter={() => {
          onHover();
        }}
        onMouseLeave={() => {
          onLeave();
        }}
      >
        <Image
          className="project-img"
          src={"/assets/image1.jpg"}
          width={150}
          height={150}
          alt=""
        />
        <div className={`wrapper${id} wrapper`}></div>

        <video className={`player${id} play`} autoPlay loop muted>
          <source src="/assets/project-video1.mp4" type="video/mp4"></source>
        </video>
      </div>
      <h2>Notes Pro</h2>
    </div>
  );
};

export default ProjectItem;
