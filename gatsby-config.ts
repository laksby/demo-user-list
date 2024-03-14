import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  pathPrefix: '/demo-user-list',
  siteMetadata: {
    title: 'Demo: User list',
    siteUrl: 'https://laksby.github.io/demo-user-list/',
  },
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-postcss', 'gatsby-transformer-json'],
};

export default config;
