import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div
        className="works-item scrolla-element-anim-1 scroll-animate"
        data-animate="active"
      >
        <div className="image">
          <div className="img">
            <Link legacyBehavior href={project.projectUrl}>
              <a>
                <img
                  decoding="async"
                  src={project.imageUrl}
                  alt={project.title}
                />
                <span className="overlay" />
              </a>
            </Link>
          </div>
        </div>
        <div className="desc">
          <span className="category">{project.category}</span>
          <h5 className="name">
            <Link legacyBehavior href={project.projectUrl}>
              <a>{project.title}</a>
            </Link>
          </h5>
          <div className="text">
            {/* THIS NOW USES THE SHORT SUMMARY */}
            <p>{project.summary}</p>
          </div>
          <Link legacyBehavior href={project.projectUrl}>
            <a className="lnk">See project</a>
          </Link>
        </div>
        <div
          className="bg-img"
          style={{ backgroundImage: "url(/assets/images/pat-2.png)" }}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
