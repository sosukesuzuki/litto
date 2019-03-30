"use strict";

const program = require("commander");
const fs = require("fs");
const litto = require("../litto").litto;
const getFileContentOrNull = require("./utils/getFileContentOrNull")
  .getFileContentOrNull;

function run() {
  program
    .version("1.0.0")
    .arguments("<filename>")
    .option("-w --write")
    .option("-f --format")
    .parse(process.argv);

  if (program.args.length !== 0) {
    const filename = program.args[0];
    getFileContentOrNull(filename).then(value => {
      const converted = litto(value, { withFormat: program.format });
      if (program.write) {
        fs.writeFile(filename, converted, "utf8", err => {
          if (err) {
            throw err;
          }
        });
      } else {
        console.log(converted);
      }
    });
  }
}

module.exports = { run };
