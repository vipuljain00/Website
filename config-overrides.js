/* config-overrides.js */
const { injectBabelPlugin } = require('react-app-rewired')

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin('transform-react-pug', config)
  return config
}
