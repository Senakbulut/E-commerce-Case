import Carousel from "components/Carousel/Carousel";
import React from "react";
import "./index.css";

const HomePage = () => {
  return (
    <section className="home-wrapper">
      <div className="bg-section" />
      <div className="product-section">
        <article>
          <h2>Everyday items, we have something to suit every occasion.</h2>
          <h6>
            At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit
            tincidunt semper eu proin leo gravida cursus.
          </h6>
          <a href="#">Shop all everyday items</a>
        </article>
        <Carousel />
      </div>
    </section>
  );
};

export default HomePage;
