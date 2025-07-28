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
      $.variable_declaration,
      $.lexical_declaration,
      $.expression,
      $.comment
    ),

    /* 1. Variables */
    // Variable delcaration with 'var'
    variable_declaration: $ => seq(
      'var',
      commaSep1($.variable_declarator),
      optional(';')
    ),

    // Variable declaration with 'let' or 'const'
    lexical_declaration: $ => seq(
      field('kind', choice('let', 'const')),
      commaSep1($.variable_declarator),
      optional(';')
    ),

    // Variable declarator - handles the name = value part
    variable_declarator: $ => seq(
      field('name', $.identifier),
      optional($._initializer),
    ),

    /* Initializer for variable assignments */
    _initializer: $ => seq(
      '=',
      field('value', $.expression)
    ),

    /* 2. Accept *any* expression (including chains) */
    assignment: $ => prec(2, choice(
      seq('$:', $.expression), // Default Identifier 
      seq($.identifier, ':', $.expression), // Custom Identifies
    )),

    /* 3. Simple Function Calls */
    function_call: $ => prec(1, seq(
      $.identifier,
      '(',
      commaSep($.expression),
      ')'
    )),

    /* 4. Method Calls */
    method_call: $ => seq(
      '.',
      $.identifier,
      '(',
      commaSep($.expression),
      ')'
    ),

    /* 5. Chain of one or more method-calls */
    chained_method: $ => prec.left(seq(
      $._base_expression,
      repeat1($.method_call)
    )),

    /* 6. What can start a chain */
    _base_expression: $ => choice(
      $.function_call,
      $.identifier,
      $.string,
      $.number
    ),

    /* 7. Full Expression Hierarchy */
    expression: $ => choice(
      $.chained_method,
      $._base_expression,
    ),

    /* 8. Terminal Rules */
    string: $ => choice(
      seq(
        '"',
        repeat(choice(/[^"\\\n]/, /\\./)),
        '"'
      ),
      seq(
        "'",
        repeat(choice(/[^'\\\n]/, /\\./)),
        "'"
      ),
      seq(
        '`',
        repeat(choice(/[^`\\\n]/, /\\./)),
        '`'
      )
    ),
    number: $ => /\d*\.\d+|\d+/,   // “.5”, “3.14”, “10”
    identifier: $ => /[a-zA-Z_]\w*/,
    comment: $ => token(seq('//', /(.*)?/)),
  }
});

// Helper for comma-separated lists
function commaSep(rule) {
  return optional(seq(rule, repeat(seq(',', rule))));
}
// Helper for comma-separated lists (at least one)
function commaSep1(rule) {
  return seq(rule, repeat(seq(',', rule)));
}
