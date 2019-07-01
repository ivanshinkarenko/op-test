import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import Layout from "../components/Layout/Layout";
import MyImg from "../components/Image/Image";
import SEO from "../components/seo";
import fluidImage from "../utils/fluidImage";

export default function IndexPage({ data }) {
  console.log("data", data);
  const { homeJson, imageOne, imageTwo, imageThree } = data;
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage Tag="section" className="section-1" fluid={imageTwo.childImageSharp.fluid} backgroundColor={`#040e18`}>
        <div className="container">
          <div className="section-1--in">
            <h2>{homeJson.section_1.title}</h2>
            <p>{homeJson.section_1.descr}</p>
          </div>
        </div>
      </BackgroundImage>

      <section className="section-2">
        <div className="container">
          <div className="section-2--in">
            <div className="section-2__text">
              <h2>{homeJson.section_2.title}</h2>
              <p>{homeJson.section_2.descr_one}</p>
              <p>{homeJson.section_2.descr_two}</p>
            </div>
            <div className="section-2__image">
              <div className="imageWrap">
                <MyImg src={homeJson.section_2.image} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-3">
        <div className="container">
          <div className="section-3--in">
            <h2 className="text-center">The new home for your money</h2>
            <div className="gallary">
              {homeJson.section_3.imageSet.map((item, index) => {
                return (
                  <div className="gallary__item" key={index}>
                    <MyImg src={item.image} />
                  </div>
                );
              })}
            </div>
            <button className="btn">Button</button>
          </div>
        </div>
      </section>

      <section className="section-4">
        <div className="container">
          <div className="section-4--in">
            <h2>The new home for your</h2>
            <div className="boxes">
              <div className="box">
                <h3>Headline</h3>
                <p>
                  A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow
                </p>
              </div>
              <div className="box">
                <h3>Headline</h3>
                <p>
                  A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow
                </p>
              </div>
              <div className="box">
                <h3>Headline</h3>
                <p>
                  A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow
                </p>
              </div>
              <div className="box">
                <h3>Headline</h3>
                <p>
                  A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow
                </p>
              </div>
              <div className="box">
                <h3>Headline</h3>
                <p>
                  A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow
                </p>
              </div>
              <div className="box">
                <h3>Headline</h3>
                <p>
                  A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query HomePageQuerry {
    homeJson {
      section_1 {
        descr
        title
        image
      }
      section_2 {
        descr_one
        descr_two
        title
        image
      }
      section_3 {
        imageSet {
          image
        }
      }
      title
    }
    imageTwo: file(relativePath: { eq: "section-1.jpg" }) {
      ...fluidImage
    }
  }
`;
