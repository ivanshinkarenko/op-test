import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import _ from "lodash";
import logoWhite from "./../../images/logo-w.png";
import SearchForm from "./../SearchForm/SearchForm";
import Logo from "./../Logo/Logo";
import styles from "./sidebar.module.scss";

const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(api)/.*\\.md$/"}}) {
          group(field: frontmatter___tags) {
            fieldValue
            nodes {
              frontmatter {
                tags
                title
              }
              fields {
                slug
              }
            }
          }
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => {
      return (
        <div className={styles.aside}>
          <div className={styles.asideInner}>
            <Logo src={logoWhite} />

            <SearchForm />

            {/* need sorting and replace to component */}
            <ul className={styles.asideBarURL}>
              {allMarkdownRemark.group.map((item, key) => {
                return (
                  <li key={key}>
                    <div className={styles.asideTag}>{item.fieldValue}</div>
                    <div className={styles.asideNav}>
                      {item.nodes.map((link, linkKey) => (
                        <Link activeStyle={{ color: "tomato" }} key={linkKey} to={link.fields.slug}>
                          {link.frontmatter.title}
                        </Link>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
            {/* need sorting and replace to component */}
          </div>
        </div>
      );
    }}
  />
);

export default Sidebar;
