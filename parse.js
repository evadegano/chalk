const nearley = require("nearley");
const grammar = require("./chalk.js");

// init a parser
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

parser.feed("log 1 * 2 + 3");

// print results of the parse
console.log(parser.results);