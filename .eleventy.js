const { DateTime } = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./public/*.css");
  eleventyConfig.addPassthroughCopy("src/images");

  // https://www.11ty.dev/docs/data-eleventy-supplied/#changing-your-project-default-permalinks
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) =>
      `${data.page.fileSlug}/index.${data.page.outputFileExtension}`;
  });

  eleventyConfig.addGlobalData("env", process.env);

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "MMM dd, yyyy",
      // "yyyy-MM-dd",
    );
  });

  eleventyConfig.addPlugin(pluginSEO, {
    title: "Ammar Alakkad",
    description: "A Sr. Frontend Engineer personal blog",
    url: "https://ammar.codes",
    author: "Ammar Alakkad",
    twitter: "AmmarCodes",
    options: {
      showPageNumbers: false,
    },
  });

  return {
    dir: {
      input: "src",
      output: "public",
      layouts: "_layouts",
    },
  };
};
