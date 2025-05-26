import { Fragment, useEffect } from "react";
import {
  activeAnimation,
  initCursor,
  jarallaxAnimation,
  stickyNav,
} from "../utils";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, pageClassName }) => {
  useEffect(() => {
    activeAnimation();
    initCursor();
    window.addEventListener("scroll", activeAnimation);
    window.addEventListener("scroll", stickyNav);
  }, []);

  // This useEffect is for page-specific classes and animations
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Splitting = require("splitting");
    }
    Splitting();
    jarallaxAnimation();

    // --- MODIFIED LOGIC FOR pageClassName ---
    const body = document.querySelector("body");
    let previousPageClassName = body.dataset.pageclass; // Store previous class

    // Remove the previous page-specific class if it exists
    if (previousPageClassName) {
      body.classList.remove(previousPageClassName);
    }

    // Add the new page-specific class if it's provided
    if (pageClassName) {
      body.classList.add(pageClassName);
      body.dataset.pageclass = pageClassName; // Remember the current class
    } else {
      delete body.dataset.pageclass; // Clear if no class
    }
    // --- END OF MODIFIED LOGIC ---
  }, [pageClassName]); // Re-run only if pageClassName changes

  return (
    <Fragment>
      <div className="container-page">
        <Header />
        {/* Wrapper */}
        <div className="wrapper">{children}</div>
        {/* Footer */}
        <Footer />
      </div>
      {/* cursor */}
      <div className="cursor" />
    </Fragment>
  );
};
export default Layout;
