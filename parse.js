const nearley = require("nearley");
const grammar = require("./chalk.js");
// hande asynchronous calls
const fs = require("mz/fs");

async function main() {
  const input = (await fs.readFile("input.json")).toString();
  // init a parser
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

  try {
    // parse code
    parser.feed(`(1 + 2) * 4`);

    console.log("Parse succeedeed.");
    console.log(parser.results[0]);
  } catch (err) {
    console.log(`Parse failed: ${err.message}`);
  }
}

main();