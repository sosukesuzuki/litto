"use strict";

const fs = require("fs");

function createError(filename, error) {
  return new Error(`Unable to read ${filename}: ${error.message}`);
}

function getFileContentOrNull(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (error, data) => {
      if (error && error.code !== "ENOENT") {
        reject(createError(filename, error));
      } else {
        resolve(error ? null : data);
      }
    });
  });
}

module.exports = {
  getFileContentOrNull
};
