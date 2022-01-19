// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "program", "symbols": ["var_assignment"], "postprocess": id},
    {"name": "program", "symbols": ["print_statement"], "postprocess": id},
    {"name": "print_statement$string$1", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "print_statement", "symbols": ["print_statement$string$1", "__", "expression"], "postprocess":  
        data => {
          return {
            type: "print_statement",
            expression: data[2]
          }
        }
          },
    {"name": "expression", "symbols": ["unary_expression"], "postprocess": id},
    {"name": "expression", "symbols": ["binary_expression"], "postprocess": id},
    {"name": "unary_expression", "symbols": ["number"], "postprocess": id},
    {"name": "unary_expression", "symbols": ["identifier"], "postprocess": id},
    {"name": "binary_expression", "symbols": ["unary_expression", "_", "operator", "_", "expression"], "postprocess": 
        data => {
          return {
            type: "binary_expression",
            left: data[0],
            operator: data[2],
            right: data[4]
          }
        }
          },
    {"name": "operator", "symbols": [{"literal":"+"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"*"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"/"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"%"}], "postprocess": id},
    {"name": "operator$string$1", "symbols": [{"literal":"*"}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "operator", "symbols": ["operator$string$1"], "postprocess": id},
    {"name": "var_assignment", "symbols": ["var_statement", "__", "identifier", "_", {"literal":"="}, "_", "expression"], "postprocess": 
        data => {
          return {
            type: "var_assignment",
            var_type: data[0],
            varname: data[2],
            value: data[6]
          }
        }
          },
    {"name": "var_statement$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var_statement", "symbols": ["var_statement$string$1"], "postprocess": id},
    {"name": "var_statement$string$2", "symbols": [{"literal":"f"}, {"literal":"l"}, {"literal":"o"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var_statement", "symbols": ["var_statement$string$2"], "postprocess": id},
    {"name": "var_statement$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var_statement", "symbols": ["var_statement$string$3"], "postprocess": id},
    {"name": "identifier$ebnf$1", "symbols": [/[a-z]/]},
    {"name": "identifier$ebnf$1", "symbols": ["identifier$ebnf$1", /[a-z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "identifier", "symbols": ["identifier$ebnf$1"], "postprocess": id},
    {"name": "number", "symbols": ["integer"], "postprocess": id},
    {"name": "number", "symbols": ["float"], "postprocess": id},
    {"name": "float", "symbols": ["integer", {"literal":"."}, "integer"], "postprocess": 
        data => Number(data[0] + "." + data[2]) 
          },
    {"name": "integer", "symbols": ["digits"], "postprocess":  
        data => Number(data[0])
         },
    {"name": "digits$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "digits$ebnf$1", "symbols": ["digits$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "digits", "symbols": ["digits$ebnf$1"], "postprocess": 
        data => data[0].join("")
          },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [/[ ]/]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
