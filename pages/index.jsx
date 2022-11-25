import React from "react";
import About from "../components/About";
import Copyright from "../components/Copyright";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import How from "../components/How";
import Testimonials from "../components/Testimonials";

// import data
import {
  aboutData,
  faqData,
  footerData,
  headerData,
  heroData,
  howData,
  navData,
  testimonialData,
} from "../components/data";
import Footer from "../components/Footer";

const Home = ({
  aboutData,
  faqData,
  footerData,
  headerData,
  heroData,
  howData,
  navData,
  testimonialData,
}) => {
  return (
    <>
      <div className="bg-page max-w-[1600px] mx-auto overflow-hidden">
        <Hero heroData={heroData} headerData={headerData} navData={navData} />
        <About aboutData={aboutData} />
        <How howData={howData} />
        <Faq faqData={faqData} />
        <Testimonials testimonialData={testimonialData} />
        <Footer footerData={footerData} />
        <Copyright />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
      faqData,
      aboutData,
      howData,
      testimonialData,
      footerData,
    },
  };
};
