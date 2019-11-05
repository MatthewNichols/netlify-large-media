module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy `src/images` to `_site/images`
    eleventyConfig.addPassthroughCopy("src/images");
  };