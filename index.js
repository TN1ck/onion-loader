var loadYaml = require('yaml-markdown');

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var res = loadYaml(this.resourcePath, function () {}, {}, source);
  return JSON.stringify(res, undefined, '\t');
};
