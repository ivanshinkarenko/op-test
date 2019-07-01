import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
function renderImage(file) {
  console.log(file);
  return <Img fluid={file.node.childImageSharp.fluid} />;
}
const MyImg = function(props) {
  console.log("props :", props);
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) => renderImage(images.edges.find(image => image.node.relativePath === props.src))}
    />
  );
};
export default MyImg;
