const { DateTime } = require("luxon");
module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./public/*.css");
  eleventyConfig.addPassthroughCopy("src/images");

  // https://www.11ty.dev/docs/data-eleventy-supplied/#changing-your-project-default-permalinks
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) =>
      `${data.page.fileSlug}/index.${data.page.outputFileExtension}`;
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "MMM dd, yyyy",
      // "yyyy-MM-dd",
    );
  });

  return {
    dir: {
      input: "src",
      output: "public",
      layouts: "_layouts",
    },
  };
};
