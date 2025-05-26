import Layout from "../src/layouts/Layout";
import PortfolioIsotopeList from "../src/components/PortfolioIsotopeList";

const Works = () => {
  return (
    <Layout pageClassName={"works-page"}>
      <div className="section-started">
        <div className="container">
          <div className="m-titles">
            <h1 className="m-title">
              <span>My Works</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="section-works">
        <div className="container">
          <PortfolioIsotopeList />
        </div>
      </div>
    </Layout>
  );
};

export default Works;
