import React from "react";

export interface WorkPageProps {
  children?: React.ReactNode;
}

const WorkPageScreen: React.FC<WorkPageProps> = () => {
  return (
    <div className="work-page">
      <div className="content"></div>
    </div>
  );
};

export default WorkPageScreen;
