import dynamic from "next/dynamic";
import Resume from "../src/components/Resume";
import Layout from "../src/layouts/Layout";
import Github from "./Github"; // Assuming these are components in the pages folder
import Techstack from "./TechStack"; // Assuming these are components in the pages folder
import Toolstack from "./ToolStack"; // Assuming these are components in the pages folder
import { useState } from "react";

const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  },
);

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("submitting");

    try {
      const response = await fetch(
        "https://formspree.io/f/mldbyove", // << YOUR FORMSPREE URL IS NOW HERE
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                      Hello, <b>I'm</b>
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>Rafi</b> Zaman
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    I am <strong>Web Developer</strong>
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>
                      I'm a front-end web developer. I have been soleley working
                      on my applications. I mostly code on react. By now, I have
                      developed many projects including react applications with
                      full stack applications too.
                    </p>
                  </div>
                  <div className="social-links">
                    <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-twitter" />
                    </a>
                    <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-dribbble" />
                    </a>
                    <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-behance" />
                    </a>
                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="https://drive.google.com/"
                    className="btn"
                  >
                    <span>Download CV</span>
                  </a>
                  <a href="#skills-section" className="btn-lnk">
                    {" "}
                    My Skills
                  </a>
                </div>
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img
                  decoding="async"
                  src="https://riz82.netlify.app/assets/myImage-27584973.jpg"
                  alt="Rafi Zaman"
                />
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{ backgroundImage: "url(assets/images/pat-1.png)" }}
                />
                <span
                  className="circle img-2"
                  style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                />
                <span
                  className="circle img-3"
                  style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                />
                <div className="info-list">
                  <ul>
                    <li>
                      <span className="num">
                        4 <strong>+</strong>
                      </span>
                      <span className="value">
                        Years of <strong>Coding Experience</strong>
                      </span>
                    </li>
                    <li>
                      <span className="num">130+</span>
                      <span className="value">
                        Completed <strong>Projects</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Web Developer </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Skills */}
      <section className="lui-section lui-gradient-center" id="skills-section">
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Professional Skillset </span>
              </h2>
            </div>
          </div>
        </div>
        <Techstack />
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Tools I use </span>
              </h2>
            </div>
          </div>
        </div>
        <Toolstack />
        <Github />
      </section>

      {/* Section - Works */}
      <section className="lui-section lui-gradient-top" id="works-section">
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Cases</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope />
            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Resume */}
      <Resume />

      {/* Section - Contacts */}
      <section className="lui-section lui-gradient-bottom" id="contact-section">
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Contact Me </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  Let’s <b>Talk About Ideas</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lui-contacts v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="numbers-items">
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-map" />
                    </div>
                    <div className="title">
                      <span> Address </span>
                    </div>
                    <div className="lui-text">
                      <span> Mymensingh, Bangladesh </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-user" />
                    </div>
                    <div className="title">
                      <span> Freelancer </span>
                    </div>
                    <div className="lui-text">
                      <span> Available here </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-envelope" />
                    </div>
                    <div className="title">
                      <span> Email </span>
                    </div>
                    <div className="lui-text">
                      <span> rafiirfan211@gmail.com </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-address-book" />
                    </div>
                    <div className="title">
                      <span> Phone </span>
                    </div>
                    <div className="lui-text">
                      <span> Call me later. </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div
                  className="contacts-form scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(assets/images/pat-1.png)" }}
                  />
                  <div className="contacts-form">
                    <form onSubmit={handleSubmit} id="cform">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Full Name <b>*</b>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Email Address <b>*</b>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Subject <b>*</b>
                              <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Message <b>*</b>
                              <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                          <div className="terms-label">
                            * Accept the terms and conditions.
                          </div>
                          <button
                            type="submit"
                            className="btn"
                            disabled={submissionStatus === "submitting"}
                          >
                            <span>
                              {submissionStatus === "submitting"
                                ? "Sending..."
                                : "Send Message"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                    {submissionStatus === "success" && (
                      <div
                        className="alert-success"
                        style={{ display: "block", marginTop: "20px" }}
                      >
                        <p>Thanks, your message is sent successfully.</p>
                      </div>
                    )}
                    {submissionStatus === "error" && (
                      <div
                        className="alert-error"
                        style={{
                          display: "block",
                          color: "red",
                          marginTop: "20px",
                        }}
                      >
                        <p>
                          Oops! Something went wrong. Please try again or
                          contact me directly via email.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Contact Me </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
