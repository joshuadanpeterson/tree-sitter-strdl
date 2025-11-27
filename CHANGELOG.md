# Changelog

## [1.2.0](https://github.com/joshuadanpeterson/tree-sitter-strdl/compare/tree-sitter-strudel-v1.1.8...tree-sitter-strudel-v1.2.0) (2025-11-27)


### Features

* **chained methods:** parsing chained methods without blanks ([b7c1884](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/b7c188415f187d4fc8433977ae752525054bc15a))
* **chore:** cleaning broken rule ([3db74b9](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/3db74b912a11ed70dedc121471981cad0f61f6e8))
* **chore:** cleaning up generated files ([df5e0d6](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/df5e0d69570ab44d9294d5649c69390647a2eb51))
* **chore:** cleanup ([3d7e903](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/3d7e9037bcfdb29266514518e4dca3df57956871))
* **chores:** added helper installation scripts and moved queries to proper folder ([acc374e](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/acc374ee46fef3669469887a956299b434e93284))
* **docs:** comments ([12de993](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/12de993bb69ac747b20f9e6b2acda1ca39a6548c))
* **filetypes:** ✨ recognize .str extension in tree-sitter metadata ([7d3504d](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/7d3504d81fb81cc383909a1efd2ca9da04f6fd28))
* **grammar:** ⚡️ Allow trailing commas in arrays/objects & expand corpus ([eaec177](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/eaec1779bb85fe6730b1ff7e8d03a50656dcbd38))
* **highlighting:** ✨ add Strudel Tree-sitter highlight rules and injection scaffold ([6e1569c](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/6e1569cb96df4c65aa88a9abde50e77d0909d222))
* **highlighting:** 🤖 auto-generate domain captures from strudel-ls builtins.json ([db4e791](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/db4e7913601fa12c47af856c86fa83d6bc34be5f))
* **mini:** ✨ Implement initial Strudel mini-notation grammar ([a7312e2](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/a7312e286e45379b604795f2ba2127e1582732fc))
* **parser:** add array literal parsing and enhance object test ([7926433](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/79264333ea07cabdbe065443cbb5f6bf45c9d771))
* **parser:** Add support for string literals, assignments, and function calls ([d4d6a97](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/d4d6a97ea470cc4105bcc447fee150aa44a78628))
* **parser:** generated tree-sitter parser.c ([9146867](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/9146867cf671e24d57ef8c1b20196d8c46538be1))
* **parser:** support for single quotes and backticks ([24045be](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/24045be534cdf15a9bb455a2e2368e791c978ac0))
* **parser:** variables and initializations ([5bb1a49](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/5bb1a494836377aa7bac2500e7e44a6ceaf3c6b6))
* **publishing:** generate files before publish ([9afe1fd](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/9afe1fd59e9fa2a8eb68a4c913b4c9c76c12d554))
* **publishing:** generate files before publish ([5dc7f93](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/5dc7f937f3ca7b2f98544f9d9fa0b52f18ca734b))
* **publishing:** generate files before publish ([88496a2](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/88496a21e5a7990bcce1bc64126453459becf56b))
* **publishing:** generate files before publish ([50c91de](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/50c91de542cb3a4e757dd3aa5e4e665caa42d572))
* **publishing:** generate files before publish ([df907c0](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/df907c0007f0e1678d24ed477e79e39954a3af6e))
* **publishing:** generate files before publish ([76f8b8c](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/76f8b8c1ca0501530e11ec13d655a3aff264679a))
* **publishing:** generate files before publish ([2742047](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/2742047f1341ecf241be44086393d7a5a313127b))
* **publishing:** generate files on publish ([cbc63f3](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/cbc63f335a801cd0f8acee0ab7bd122762cf8ef4))
* **publishing:** generate files on publish ([b54bdb9](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/b54bdb91a4c331ceddf70322833d4019b2597caf))
* **publishing:** generate files on publish ([f55a661](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/f55a6619a28a3ff8080a85069e1ac43910832157))


### Bug Fixes

* **highlighting:** 🎨 dual-tag methods with [@method](https://github.com/method) and [@function](https://github.com/function).method; regen domain captures ([0f178a5](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/0f178a588cbb4ee08a26aa8ce799ee0162c595c2))
* **highlighting:** 🪄 ensure functions/methods/numbers are visible in Neovim ([ce2c842](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/ce2c842dd93b7cec93c6fdaafd447f0235452e1b))
* **parser:** adjust function call and string parsing grammar, update test case ([e7f6fda](https://github.com/joshuadanpeterson/tree-sitter-strdl/commit/e7f6fda4782c52514c74c8aa2b1da7617c940888))
