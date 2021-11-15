module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@data": "src/data",
          "@components": "src/components",
          "@pages": "src/pages",
          "@styles": "src/styles",
          "@containers": "src/containers",
          "@images": "src/images/images",
          "@icons": "src/images/icons",
        },
        extensions: [
          "js",
        ]
      }
    },
    {
       resolve: 'gatsby-plugin-postcss',
    }
  ],
};
