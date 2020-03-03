var binwrap = require("binwrap");
var path = require("path");

var packageInfo = require(path.join(__dirname, "package.json"));
var version = packageInfo.split('.').slice(0, 2).join('.');
var root = "https://github.com/cortesi/modd/releases/download/v" + version + "/modd-v" + version;

module.exports = binwrap({
  dirname: __dirname,
  binaries: [
    "modd"
  ],
  urls: {
    "darwin-x64": root + "-osx64.tgz",
    "linux-x64": root + "-linux64.tgz",
    "win32-x64": root + "-windows32.zip",
    "win32-ia32": root + "-windows64.zip"
  }
});