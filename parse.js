const nearley = require("nearley");
const grammar = require("./chalk.js");

function main() {
  // init a parser
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

  try {
    // parse code
    parser.feed("true");

    console.log("Parse succeedeed.");
    console.log(`Wrote ${parser.results[0]}.`);
  } catch (err) {
    console.log(`Parse failed: ${err.message}`);
  }
}

main();