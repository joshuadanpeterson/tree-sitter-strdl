/**
 * @file Parser for Strudel, a Tidal Cycles base live coding tool
 * @author Zedro <45104292+PedroZappa@users.noreply.github.com >
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "strudel",

  extras: $ => [
    /[\s\n]/,         // whitespace
    $.comment,        // enable comments
  ],

  rules: {
    source_file: $ => repeat($._statement), // Root Rule

    _statement: $ => choice(  // Hidden Rule, for structural organization
      $.assignment,
      $.function_call,
      $.comment
    ),

    assignment: $ => prec(2, choice(
      seq('$:', $.expression), // Default Identifier 
      seq($.identifier, ':', $.expression), // Custom Identifies
    )),

    function_call: $ => prec(1, seq(
      $.identifier,
      '(',
      commaSep($.expression),
      ')'
    )),

    member_expression: $ => prec.left(seq(
      $.expression,           // Base expression (like s("hh*8"))
      repeat1(seq(            // One or more method calls
        '.',                  // Dot operator
        $.identifier,         // Method name (like 'phaser')
        '(',                  // Opening parenthesis
        commaSep($.expression), // Arguments
        ')'                   // Closing parenthesis
      ))
    )),

    expression: $ => choice(
      $.member_expression,
      $.function_call,
      $.string,
      $.number,
      $.identifier
      // TODO: Add more rules...
    ),

    // Terminal Rules
    string: $ => seq(
      '"',
      repeat(choice(
        /[^"\\\n]/,
        /\\./      // handle escapes
      )),
      '"'
    ),
    number: $ => /\d+(\.\d+)?/,
    identifier: $ => /[a-zA-Z_]\w*/,
    comment: $ => token(seq('//', /(.*)?/)),
  }
});

// Helper for comma-separated lists
function commaSep(rule) {
  return optional(seq(rule, repeat(seq(',', rule))));
}
