"use strict";

const unified = require("unified");
const markdown = require("remark-parse");

function parse(text) {
  const processor = unified().use(markdown, { commonmark: true });
  return processor.runSync(processor.parse(text));
}

function litto(text) {
  console.log(parse(text));
  return text;
}

module.exports = {
  litto
};
