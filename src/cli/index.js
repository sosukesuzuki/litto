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
    .action(filename => {
      getFileContentOrNull(filename)
        .then(value => {
          const formatted = litto(value);
          console.log(formatted);
        })
        .catch(err => console.error(err.message));
    })
    .option("-w --write <filename>")
    .parse(process.argv);

  const filename = program.write;
  if (filename) {
    getFileContentOrNull(filename).then(value => {
      const formatted = litto(value);
      fs.writeFile(filename, formatted, "utf8", err => {
        if (err) {
          console.error(err.message);
          process.exit(1);
        }
      });
    });
  }
}

module.exports = { run };
