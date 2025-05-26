import Link from "next/link";
import { useRouter } from "next/router";
import { projectsData } from "../../src/data/projects";
import Layout from "../../src/layouts/Layout";
import { useEffect, useRef } from "react";
import Isotope from "isotope-layout";

const WorkSingle = () => {
  const router = useRouter();
  const { slug } = router.query;
  const isotope = useRef();

  // --- Data Logic ---
  const project = projectsData.find((p) => p.id === slug);
  const currentIndex = projectsData.findIndex((p) => p.id === slug);
  const nextIndex = (currentIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextIndex];

  // --- Gallery Logic ---
  useEffect(() => {
    if (project) {
      setTimeout(() => {
        isotope.current = new Isotope(".m-gallery .row", {
          itemSelector: ".col-xs-12",
          percentPosition: true,
          masonry: { columnWidth: ".col-xs-12" },
        });
      }, 500);
    }
  }, [project]);

  if (!project) {
    return (
      <Layout>
        <div style={{ textAlign: "center", padding: "100px" }}>
          <h1>Loading...</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout pageClassName={"portfolio-template"}>
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        <div className="container">
          <div className="m-titles align-left">
            <h1 className="m-title">
              <span>{project.title}</span>
            </h1>
          </div>
        </div>
        <div className="v-line v-line-right v-line-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div className="m-details">
                  <div className="details-label">
                    <span>Developed Year:</span>
                    <strong>
                      <span>{project.developedYear}</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Technology:</span>
                    <strong>
                      <span>{project.technology.join(", ")}</span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.livePreviewUrl}
                  className="btn"
                >
                  <span>Live Preview</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Description */}
      <section className="section section-inner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="post-content">
                <h4>Description</h4>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Gallery */}
      <section className="section section-inner">
        <div className="container">
          <div className="m-gallery">
            <div className="row">
              {/* Render the main project image FIRST */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="works-item">
                  <div className="image">
                    <div className="img">
                      <a href={project.imageUrl} className="has-popup-image">
                        <img
                          decoding="async"
                          src={project.imageUrl}
                          alt={project.title}
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* THEN, render the rest of the images from the gallery array */}
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="col-xs-12 col-sm-6 col-md-6 col-lg-6"
                >
                  <div className="works-item">
                    <div className="image">
                      <div className="img">
                        <a href={image} className="has-popup-image">
                          <img
                            decoding="async"
                            src={image}
                            alt={`${project.title} gallery`}
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section - Navigation */}
      <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="h-titles h-navs">
            <Link legacyBehavior href={nextProject.projectUrl}>
              <a>
                <span className="nav-arrow">
                  <span>Next Project</span>
                </span>
                <span className="h-title">
                  <span>{nextProject.title}</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WorkSingle;
