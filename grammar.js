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
      $.function_call,
      $.assignment,
      $.comment
    ),

    function_call: $ => seq(
      $.identifier,
      '(',
      commaSep($.expression),
      ')'
    ),

    assignment: $ => seq(
      '$:',
      $.expression
    ),

    expression: $ => choice(
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
