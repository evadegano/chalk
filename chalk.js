// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "program", "symbols": ["object"]},
    {"name": "statements", "symbols": ["_", "statement", "_"], "postprocess":  
        data => [data[0]]
          },
    {"name": "statements", "symbols": ["_", "statement", "_", {"literal":"\n"}, "statements"], "postprocess": 
        data => [data[0], ...data[4]]
          },
    {"name": "statement", "symbols": ["var_assignment"], "postprocess": id},
    {"name": "statement", "symbols": ["print_statement"], "postprocess": id},
    {"name": "statement", "symbols": ["while_loop"], "postprocess": id},
    {"name": "statement", "symbols": ["expression"], "postprocess": id},
    {"name": "while_loop$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "while_loop", "symbols": ["while_loop$string$1", "__", "binary_expression", "_", {"literal":":"}, "_", {"literal":"\n"}, "statements"], "postprocess":  
        data => {
          return {
            type: "while_loop",
            condition: data[2],
            body: data[8]
          }
        }
          },
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
    {"name": "var_assignment", "symbols": ["var_type", "__", "identifier", "_", {"literal":"="}, "_", "expression"], "postprocess": 
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
    {"name": "identifier$ebnf$1", "symbols": [/[a-z]/]},
    {"name": "identifier$ebnf$1", "symbols": ["identifier$ebnf$1", /[a-z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "identifier", "symbols": ["identifier$ebnf$1"], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"+"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"*"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"/"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"%"}], "postprocess": id},
    {"name": "operator$string$1", "symbols": [{"literal":"*"}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "operator", "symbols": ["operator$string$1"], "postprocess": id},
    {"name": "operator$string$2", "symbols": [{"literal":"="}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "operator", "symbols": ["operator$string$2"], "postprocess": id},
    {"name": "operator$string$3", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "operator", "symbols": ["operator$string$3"], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"<"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":">"}], "postprocess": id},
    {"name": "operator$string$4", "symbols": [{"literal":"<"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "operator", "symbols": ["operator$string$4"], "postprocess": id},
    {"name": "operator$string$5", "symbols": [{"literal":">"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "operator", "symbols": ["operator$string$5"], "postprocess": id},
    {"name": "object", "symbols": ["simple_object"]},
    {"name": "object", "symbols": ["complex_object"]},
    {"name": "complex_object", "symbols": ["array"]},
    {"name": "complex_object", "symbols": ["dictionnary"]},
    {"name": "dictionnary", "symbols": [{"literal":"{"}, {"literal":"}"}]},
    {"name": "array", "symbols": [{"literal":"["}, {"literal":"]"}]},
    {"name": "array", "symbols": [{"literal":"["}, "array_items", {"literal":"]"}]},
    {"name": "array_items", "symbols": ["simple_object"]},
    {"name": "array_items", "symbols": ["simple_object", {"literal":","}, "array_items"]},
    {"name": "simple_object", "symbols": ["number"]},
    {"name": "simple_object", "symbols": ["boolean"]},
    {"name": "simple_object", "symbols": ["myNull"]},
    {"name": "simple_object", "symbols": ["string"]},
    {"name": "string$ebnf$1", "symbols": ["character"]},
    {"name": "string$ebnf$1", "symbols": ["string$ebnf$1", "character"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "string", "symbols": [{"literal":"\""}, "string$ebnf$1", {"literal":"\""}]},
    {"name": "character", "symbols": [/[^\"]/]},
    {"name": "myNull$string$1", "symbols": [{"literal":"n"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "myNull", "symbols": ["myNull$string$1"]},
    {"name": "boolean$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$1"], "postprocess": () => true},
    {"name": "boolean$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$2"], "postprocess": () => false},
    {"name": "number", "symbols": ["integer"], "postprocess": id},
    {"name": "number", "symbols": ["float"], "postprocess": id},
    {"name": "float", "symbols": ["integer", {"literal":"."}, "integer"]},
    {"name": "integer$ebnf$1", "symbols": ["digit"]},
    {"name": "integer$ebnf$1", "symbols": ["integer$ebnf$1", "digit"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "integer", "symbols": ["integer$ebnf$1"], "postprocess":  
        data => data[0].join("")
          },
    {"name": "digit", "symbols": [/[0-9]/]},
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
