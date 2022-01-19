const nearley = require("nearley");
const grammar = require("./chalk.js");
const fs = require("mz/fs");
const path = require("path");

async function main() {
  // init a parser
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  // get .chalk file name from terminal arguments
  const filename = process.argv[2];
  // generate output file name
  const outputFilename = path.basename(filename, ".chalk") + ".ast";
  // get code from .chalk file
  const code = (await fs.readFile(filename)).toString();

  try {
    // parse code
    parser.feed(code);
    // stock parser results
    const ast = parser.results[0];
    // output file with parser results
    await fs.writeFile(outputFilename, JSON.stringify(ast, null));

    console.log("Parse succeedeed.");
    console.log(`Wrote ${outputFilename}.`);
  } catch (err) {
    console.log(`Parse failed: ${err.message}`);
  }
}

main();