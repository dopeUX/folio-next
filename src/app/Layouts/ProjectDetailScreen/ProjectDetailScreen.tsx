import React, { useRef } from "react";
import "./ProjectDetailScreen.css";
import Image from "next/image";
import useHorizontalScroll from "@/app/hooks/useHorizontalScroll";

export interface ProjectDetailScreenProps {
  children?: React.ReactNode;
}

const ProjectDetailScreen: React.FC<ProjectDetailScreenProps> = () => {
  const listRef: any = useHorizontalScroll();

  return (
    <div className="project-detail">
      <div className="content">
        <div className="header">
          <Image
            className="back-btn"
            alt=""
            src={"/assets/back-btn-white.svg"}
            width={120}
            height={120}
          />

          <section className="title-sec">
            <h1>Notes Pro</h1>
            <div className="action-btns">
              <p>Visit.</p>
              <p>Repo.</p>
            </div>
          </section>
        </div>

        <div className="project-imgs">
          <ul ref={listRef} className="images-list">
            <li>
              <Image
                className="image"
                src={"/assets/projectImages/notes-pro1.jpg"}
                width={500}
                height={300}
                alt=""
                unoptimized
              />
            </li>
            <li>
              <Image
                className="image"
                src={"/assets/projectImages/notes-pro1.jpg"}
                width={500}
                height={300}
                alt=""
                unoptimized
              />
            </li>
            <li>
              <Image
                className="image"
                src={"/assets/projectImages/notes-pro1.jpg"}
                width={500}
                height={300}
                alt=""
                unoptimized
              />
            </li>
            <li>
              <Image
                className="image"
                src={"/assets/projectImages/notes-pro1.jpg"}
                width={500}
                height={300}
                alt=""
                unoptimized
              />
            </li>
            <li>
              <Image
                className="image"
                src={"/assets/projectImages/notes-pro1.jpg"}
                width={700}
                height={600}
                alt=""
                unoptimized
              />
            </li>
            <li>
              <Image
                className="image"
                src={"/assets/projectImages/notes-pro1.jpg"}
                width={500}
                height={300}
                alt=""
                unoptimized
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailScreen;
