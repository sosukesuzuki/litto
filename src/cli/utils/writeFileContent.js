"use strict";

const fs = require("fs");

function createError(filename, error) {
  return new Error(`Unable to write ${filename}: ${error.message}`);
}

function writeFileContent(filename, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, content, "utf8", error => {
      if (error && error.code !== "ENOENT") {
        reject(createError(filename, error));
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  writeFileContent
};
