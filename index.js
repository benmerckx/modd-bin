var binwrap = require("binwrap");
var path = require("path");

var packageInfo = require(path.join(__dirname, "package.json"));
var version = packageInfo.version.split('.').slice(0, 2).join('.');
var root = "https://dl.bintray.com/benmerckx/modd/modd-" + version;

module.exports = binwrap({
  dirname: __dirname,
  binaries: [
    "modd"
  ],
  urls: {
    "linux-x64": root + "-linux64.tgz",
    "win32-x64": root + "-windows64.zip"
  }
});