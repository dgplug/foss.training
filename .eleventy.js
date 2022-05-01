module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "./src/assets": "assets" });

    return {
      templateFormats: [
        "md",
        "njk"
      ],
  
      pathPrefix: "/",
  
      markdownTemplateEngine: "liquid",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
      passthroughFileCopy: true,
      dir: {
        input: "src",
        includes: "_includes",
        data: "_data",
        output: "_site"
      }
    };
  };