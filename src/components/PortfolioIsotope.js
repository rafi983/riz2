import { Fragment } from "react";
import Link from "next/link";
import { projectsData } from "../data/projects";
import ProjectCard from "./ProjectCard";

const PortfolioIsotope = ({ noViewMore }) => {
  const displayedProjects = projectsData.slice(0, 6);

  return (
    <Fragment>
      <div className="works-items works-masonry-items row">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {!noViewMore && (
        <div className="load-more-link">
          <Link legacyBehavior href="/works">
            <a
              className="btn scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <span>View More</span>
            </a>
          </Link>
        </div>
      )}
    </Fragment>
  );
};

export default PortfolioIsotope;
