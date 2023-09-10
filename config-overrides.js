const { override } = require('customize-cra');
const postcssConfig = require('./postcss.config.js');

module.exports = override(
  postcssConfig()
);
