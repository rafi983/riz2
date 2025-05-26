import { Fragment } from "react";
import { projectsData } from "../data/projects";
import ProjectCard from "./ProjectCard";

const PortfolioIsotopeList = () => {
  return (
    <Fragment>
      <div className="works-items works-masonry-items row">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Fragment>
  );
};

export default PortfolioIsotopeList;
