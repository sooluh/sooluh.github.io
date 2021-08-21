const fs = require("fs");
const yaml = require("js-yaml");

const linksContent = fs.readFileSync("./data/links.yml", "utf-8");
const links = yaml.load(linksContent);

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    const linksCollection = addCollection({
      typeName: "Links"
    });

    for (const link of links) {
      linksCollection.addNode(link);
    }
  });

  api.createPages(({ createPage }) => {
  });
};
