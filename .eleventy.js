module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./public/*.css");
  eleventyConfig.addPassthroughCopy("src/images");

  // https://www.11ty.dev/docs/data-eleventy-supplied/#changing-your-project-default-permalinks
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) =>
      `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });

  return {
    dir: {
      input: "src",
      output: "public",
      layouts: "_layouts",
    },
  };
};
