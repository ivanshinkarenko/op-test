import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import WillBeSoon from "../components/WillBeSoon/WillBeSoon";
import SEO from "../components/seo";

export default function AboutPagee({ data }) {
  console.log("data :", data);

  return (
    <Layout>
      <SEO title="About!! page" />
      <WillBeSoon />
      {/* <h1>{data.aboutJson.title}</h1> */}
    </Layout>
  );
}

export const pageQuery = graphql`
  query AboutPageQuerry {
    aboutJson {
      title
    }
  }
`;
