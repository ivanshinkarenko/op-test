import React from "react";
import WillBeSoon from "../components/WillBeSoon/WillBeSoon";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

const DemoPage = () => (
  <Layout>
    <SEO title="Demo page" />
    <WillBeSoon />
  </Layout>
);

export default DemoPage;
