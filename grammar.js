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
      $.expression,
      $.comment
    ),

    /* 1. Accept *any* expression (including chains) */
    assignment: $ => prec(2, choice(
      seq('$:', $.expression), // Default Identifier 
      seq($.identifier, ':', $.expression), // Custom Identifies
    )),

    /* 2. Simple Function Calls */
    function_call: $ => prec(1, seq(
      $.identifier,
      '(',
      commaSep($.expression),
      ')'
    )),

    /* 3. Chain of one or more dot-calls */
    chained_method: $ => prec.left(seq(
      $._base_expression,
      repeat1(seq(
        '.', $.identifier, '(', commaSep($.expression), ')'
      ))
    )),

    /* 4.  What can start a chain */
    _base_expression: $ => choice(
      $.function_call,
      $.identifier,
      $.string,
      $.number
    ),

    /* 5. Full Expression Hierarchy */
    expression: $ => choice(
      $.chained_method,
      $._base_expression,
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
