/**
 * @file Parser for Strudel, a Tidal Cycles base live coding tool
 * @author Zedro <45104292+PedroZappa@users.noreply.github.com >
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "strudel",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
