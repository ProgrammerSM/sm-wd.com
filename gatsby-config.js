module.exports = {
  siteMetadata: {
    title: `Sterling May - Web Developer`,
    description: `A personal site where I can practice, grow and show off my skills as a web developer.`,
    author: `Sterling May`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'treehouse',
        fieldName: 'treehouseSM',
        url: 'https://teamtreehouse.com/sterlingmay.json'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sterling May's Web Development Portfolio`,
        short_name: `Sterling's Portfolio`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-emotion',
  ],
}
