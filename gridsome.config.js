const addStyleResource = require("./src/plugins/style-resources.js");

module.exports = {
  siteName: "Suluh Sulistiawan",
  siteDescription: "Kenalin, aku Suluh Sulistiawan; seorang pengembang perangkat lunak asal Pemalang, Jawa Tengah.",

  titleTemplate: "%s",
  siteUrl: "https://suluh.my.id",

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./content/articles/*/index.md",
        typeName: "Article"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./content/projects/*/index.md",
        typeName: "Project"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./content/about.md",
        typeName: "About"
      }
    },

    {
      use: '@securized/plugin-cloudflare-analytics',
      options: {
        token: '183d4e84272c4b3c9a13e841298129df'
      }
    },
    {
      use: "gridsome-plugin-disqus",
      options: {
        shortname: "suluh"
      }
    }
  ],

  chainWebpack(config) {
    // load global scss variables
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    types.forEach((type) => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  },

  templates: {
    Article: "/read/:title",
    Project: "/project/:title",
    About: "/about"
  },

  icon: "./src/favicon.jpg",

  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
