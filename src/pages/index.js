import React from "react";
import Layout from "../component/Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const IndexPage = () => {
  return (
      <main>
          <Layout pageTitle="Home Page">
              <p>I'm making this by following the Gatsby Tutorial.</p>
              <StaticImage src="../images/perrito.jpg" alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" />
          </Layout>
      </main>
  )
}



export default IndexPage
