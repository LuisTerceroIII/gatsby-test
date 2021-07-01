module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
    description : "Tutorial Gatsby Project =)",
    landingImages : {
        image1 : "https://images.pexels.com/photos/1666025/pexels-photo-1666025.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    }
  },
  plugins: [
      "gatsby-plugin-gatsby-cloud",
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
          resolve: "gatsby-source-filesystem",
          options: {
              name: `blog`,
              path: `${__dirname}/blog`,
          }
      }
  ],
};
