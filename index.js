var binwrap = require("@benmerckx/binwrap");
var path = require("path");

var version = '0.8'
var root = `https://github.com/cortesi/modd/releases/download/v${version}/modd-${version}`;

module.exports = binwrap({
  dirname: __dirname,
  binaries: [
    "modd"
  ],
  urls: {
    "darwin-x64": root + "-osx64.tgz",
    "darwin-arm64": root + "-osx64.tgz",
    "linux-x64": root + "-linux64.tgz",
    "linux-arm64": root + "-linuxARM.tgz",
    "win32-x64": root + "-windows64.zip"
  }
});
