import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Why is ecommerce website the best?
An ecommerce website will put your company and 
products in the hands of consumers no matter what
 device they're using. Whenever somebody needs something you sell,
  all they'll need to do is whip out their laptop or smartphone, 
  browse through your website and purchases the products they desire.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
