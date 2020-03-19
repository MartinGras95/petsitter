module.exports = {
  siteMetadata: {
    title: `Pet Sitter Website`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins:[
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
    ,
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_API_KEY}` // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
        },
        queries: [
          `{
            repository(owner: "MartinGras95", name: "issuestest") {
              issues(last: 20, states: OPEN) {
                edges {
                  node {
                    id
                    author{
                      url
                      login
                    }
                    bodyHTML
                    title
                    url
                  }
                }
              }
            }
          }`,
        ],
      },
    },
  ]
}
  // 945e41aa81fcdedfcc3e95af4abb505c1fd4eb27