"use strict";

const unified = require("unified");
const markdown = require("remark-parse");
const stringify = require("remark-stringify");

function parse(text) {
  const processor = unified().use(markdown);
  return processor.runSync(processor.parse(text));
}

function stringifyFromAst(ast) {
  return unified()
    .use(stringify)
    .stringify(ast);
}

function searchListAndReplaceWithTodo(ast) {
  function convertListItemToTodo(listItem) {
    if (listItem.checked !== null) {
      return listItem;
    }
    return {
      ...listItem,
      checked: false
    };
  }

  function scan(ast) {
    if (ast.type === "root") {
      ast.children = ast.children.map(child => scan(child));
    } else if (ast.type === "list") {
      ast.children = ast.children.map(child => scan(child));
    } else if (ast.type === "listItem") {
      ast = convertListItemToTodo(ast);
      ast.children = ast.children.map(child => scan(child));
    }
    return ast;
  }

  return scan(ast);
}

function litto(text) {
  const ast = parse(text);
  const formattedAst = searchListAndReplaceWithTodo(ast);
  const formatted = stringifyFromAst(formattedAst);
  return formatted;
}

module.exports = {
  litto
};
