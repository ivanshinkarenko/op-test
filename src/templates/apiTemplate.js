import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ApiLayout from "../components/Layout/ApiLayout";

export default function ApiTemplate({ data }) {
  console.log("template :", data);
  const {
    markdownRemark: { html, tableOfContents },
  } = data;
  return (
    <ApiLayout tableOfContents={tableOfContents}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ApiLayout>
  );
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      tableOfContents
    }
  }
`;

ApiTemplate.propTypes = {
  data: PropTypes.object,
};
