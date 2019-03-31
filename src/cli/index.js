"use strict";

const program = require("commander");
const colors = require("colors/safe");
const litto = require("../litto").litto;
const writeFileContent = require("./utils/writeFileContent").writeFileContent;
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
    const filenames = program.args;
    const getFilesContentPromise = filenames.map(filename =>
      getFileContentOrNull(filename)
    );
    Promise.all(getFilesContentPromise).then(values => {
      const writePromise = values.map((value, i) => {
        const filename = filenames[i];
        const converted = litto(value, { withFormat: program.format });
        if (program.write) {
          console.log(colors.gray(filename));
          writeFileContent(filename, converted);
        } else {
          console.log(converted);
        }
      });
      Promise.all(writePromise).then(() => {
        if (program.write) {
          console.log("Done.");
        }
      });
    });
  }
}

module.exports = { run };
