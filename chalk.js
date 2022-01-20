// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "input", "symbols": ["object"], "postprocess": id},
    {"name": "input", "symbols": ["binary_expression"], "postprocess": id},
    {"name": "input", "symbols": ["statements"]},
    {"name": "statements", "symbols": ["_", "statement", "_"], "postprocess":  
        data => [data[0]]
          },
    {"name": "statements", "symbols": ["_", "statement", "_", {"literal":"\n"}, "statements"], "postprocess": 
        data => [data[0], ...data[4]]
          },
    {"name": "statement", "symbols": ["var_assignment"], "postprocess": id},
    {"name": "var_assignment", "symbols": ["var_type", "__", "var_identifier", "_", {"literal":"="}, "_", "object"], "postprocess": 
        data => {
          return {
            type: "var_assignment",
            var_type: data[0],
            varname: data[2],
            value: data[6]
          }
        }
          },
    {"name": "var_type$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var_type", "symbols": ["var_type$string$1"], "postprocess": id},
    {"name": "var_type$string$2", "symbols": [{"literal":"f"}, {"literal":"l"}, {"literal":"o"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var_type", "symbols": ["var_type$string$2"], "postprocess": id},
    {"name": "var_type$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var_type", "symbols": ["var_type$string$3"], "postprocess": id},
    {"name": "var_type$string$4", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"r"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var_type", "symbols": ["var_type$string$4"], "postprocess": id},
    {"name": "var_type$string$5", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"c"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var_type", "symbols": ["var_type$string$5"], "postprocess": id},
    {"name": "var_identifier$ebnf$1", "symbols": [/[A-z]/]},
    {"name": "var_identifier$ebnf$1", "symbols": ["var_identifier$ebnf$1", /[A-z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "var_identifier", "symbols": ["var_identifier$ebnf$1"], "postprocess": id},
    {"name": "binary_expression", "symbols": ["additive"]},
    {"name": "binary_expression", "symbols": ["multiplicative"]},
    {"name": "additive", "symbols": ["multiplicative"], "postprocess": id},
    {"name": "additive", "symbols": ["multiplicative", "_", /[+-]/, "_", "additive"], "postprocess":  
        data => {
          switch (data[2]) {
            case "+":
              return data[0] + data[4];
            case "-":
              return data[0] - data[4];
          }
        } 
            },
    {"name": "multiplicative", "symbols": ["unary_expression"], "postprocess": id},
    {"name": "multiplicative", "symbols": ["unary_expression", "_", /[*/%]/, "_", "multiplicative"], "postprocess":  
        data => {
          switch (data[2]) {
            case "*":
              return data[0] * data[4];
            case "/":
              return data[0] / data[4];
            case "%":
              return data[0] % data[4];
            case "^":
              return data[0] ** data[4];
          }
        } 
            },
    {"name": "unary_expression", "symbols": ["number"], "postprocess": id},
    {"name": "unary_expression", "symbols": [{"literal":"("}, "_", "additive", "_", {"literal":")"}], "postprocess": data => data[2]},
    {"name": "assignment_operator", "symbols": [{"literal":"+"}], "postprocess": id},
    {"name": "assignment_operator", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "assignment_operator", "symbols": [{"literal":"*"}], "postprocess": id},
    {"name": "assignment_operator", "symbols": [{"literal":"/"}], "postprocess": id},
    {"name": "assignment_operator", "symbols": [{"literal":"^"}], "postprocess": id},
    {"name": "assignment_operator", "symbols": [{"literal":"%"}], "postprocess": id},
    {"name": "comparison_operator$string$1", "symbols": [{"literal":"="}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "comparison_operator", "symbols": ["comparison_operator$string$1"], "postprocess": id},
    {"name": "comparison_operator$string$2", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "comparison_operator", "symbols": ["comparison_operator$string$2"], "postprocess": id},
    {"name": "comparison_operator", "symbols": [{"literal":"<"}], "postprocess": id},
    {"name": "comparison_operator", "symbols": [{"literal":">"}], "postprocess": id},
    {"name": "comparison_operator$string$3", "symbols": [{"literal":"<"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "comparison_operator", "symbols": ["comparison_operator$string$3"], "postprocess": id},
    {"name": "comparison_operator$string$4", "symbols": [{"literal":">"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "comparison_operator", "symbols": ["comparison_operator$string$4"], "postprocess": id},
    {"name": "object", "symbols": ["simple_object"], "postprocess": id},
    {"name": "object", "symbols": ["array"], "postprocess": id},
    {"name": "array", "symbols": [{"literal":"["}, "_", {"literal":"]"}], "postprocess": () => []},
    {"name": "array", "symbols": [{"literal":"["}, "_", "array_items", "_", {"literal":"]"}], "postprocess": data => "[" + data[2] + "]"},
    {"name": "array_items", "symbols": ["simple_object"], "postprocess": id},
    {"name": "array_items", "symbols": ["simple_object", {"literal":","}, "_", "array_items"], "postprocess": data => [data[0] + "," + " " + data[3]]},
    {"name": "simple_object", "symbols": ["number"], "postprocess": id},
    {"name": "simple_object", "symbols": ["boolean"], "postprocess": id},
    {"name": "simple_object", "symbols": ["myNull"], "postprocess": id},
    {"name": "simple_object", "symbols": ["string"], "postprocess": id},
    {"name": "string$ebnf$1", "symbols": ["character"]},
    {"name": "string$ebnf$1", "symbols": ["string$ebnf$1", "character"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "string", "symbols": [{"literal":"\""}, "string$ebnf$1", {"literal":"\""}], "postprocess": data => "\"" + data[1].join("") + "\""},
    {"name": "character", "symbols": [/[^\"\\]/], "postprocess": id},
    {"name": "character", "symbols": [{"literal":"\\"}, "escape"], "postprocess": data => data[1]},
    {"name": "escape", "symbols": [{"literal":"\""}], "postprocess": () => '"'},
    {"name": "escape", "symbols": [{"literal":"\\"}], "postprocess": () => "\\"},
    {"name": "escape", "symbols": [{"literal":"/"}], "postprocess": () => "/"},
    {"name": "escape", "symbols": [{"literal":"b"}], "postprocess": () => "\b"},
    {"name": "escape", "symbols": [{"literal":"f"}], "postprocess": () => "\f"},
    {"name": "escape", "symbols": [{"literal":"n"}], "postprocess": () => "\n"},
    {"name": "escape", "symbols": [{"literal":"r"}], "postprocess": () => "\r"},
    {"name": "escape", "symbols": [{"literal":"t"}], "postprocess": () => "\t"},
    {"name": "escape", "symbols": [{"literal":"u"}, "hex", "hex", "hex", "hex"], "postprocess": 
        data => {
          const code = parseInt(data.splice(1).join(""), 16);
          return String.fromCharCode(code);
        }
            },
    {"name": "hex", "symbols": ["digit"], "postprocess": data => Number(data[0])},
    {"name": "hex", "symbols": [/[a-fA-F]/], "postprocess": 
        data => {
          switch (data[0].toLowerCase()) {
            case "a":
              return 10;
            case "b":
              return 11;
            case "c":
              return 12;
            case "d":
              return 13;
            case "e":
              return 14;
            case "f":
              return 15;
          }
        }
            },
    {"name": "myNull$string$1", "symbols": [{"literal":"n"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "myNull", "symbols": ["myNull$string$1"]},
    {"name": "boolean$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$1"], "postprocess": () => true},
    {"name": "boolean$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$2"], "postprocess": () => false},
    {"name": "number", "symbols": ["integer"], "postprocess": id},
    {"name": "number", "symbols": ["float"], "postprocess": id},
    {"name": "float", "symbols": ["integer", {"literal":"."}, "integer"], "postprocess": data => data[0] + "." + data[2]},
    {"name": "integer$ebnf$1", "symbols": ["digit"]},
    {"name": "integer$ebnf$1", "symbols": ["integer$ebnf$1", "digit"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "integer", "symbols": ["integer$ebnf$1"], "postprocess": data => Number(data[0].join(""))},
    {"name": "digit", "symbols": [/[0-9]/], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [/[ ]/]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]}
]
  , ParserStart: "input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
