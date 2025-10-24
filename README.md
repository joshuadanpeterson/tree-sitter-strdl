# tree-sitter-strdl

Tree-sitter parser for Strudel, a Tidal Cycles based live coding tool.

___

## Usage

To install the parser in Neovim:

- Create a file `strudel-integration.lua` in your `~/.config/nvim/lua/` directory:

```lua
---@class ParserConfig
local parser_config = require("nvim-treesitter.parsers").get_parser_configs()
parser_config.strudel = {
  install_info = {
    -- url = "https://github.com/pedrozappa/tree-sitter-strdl", -- local path or git repo
    url = "~/tree-sitter-strdl/", -- local path to this repo
    files = { "src/parser.c" }, -- note that some parsers also require src/scanner.c or src/scanner.cc
    -- optional entries:
    branch = "main", -- default branch in case of git repo if different from master
    generate_requires_npm = false, -- if stand-alone parser without npm dependencies
    requires_generate_from_grammar = false, -- if folder contains pre-generated src/parser.c
  },
  filetype = "strdl", -- if filetype does not match the parser name
}

vim.api.nvim_create_autocmd("BufRead", {
  pattern = { "*.strdl", "*.strudel", "*.str" },
  callback = function()
    vim.bo.filetype = "strdl"
  end,
})
```

- On your `~/.config/nvim/init.lua`:

```lua
require("strudel-integration")
```

Run the following to install the parsers schemas:

```bash
npm run local_install
```



## Docs

- [Tree-sitter](https://tree-sitter.github.io/tree-sitter/)
- [Strudel.cc](https://strudel.cc/)
- [Tidal Cycles ](https://tidalcycles.org/)

## Learning Resources

- [Crafting Interpreters by Robert Nystrom](https://www.craftinginterpreters.com/)

## Highlighting and Injections

This repo ships Tree-sitter queries:
- queries/highlights.scm
- queries/injections.scm
- queries/locals.scm

Filetypes recognized:
- .str, .strdl, .strudel all map to filetype=strdl

Mini-notation strings
- Strings passed to pattern-bearing functions are tagged as `@string.special`.
- Functions recognized: s, sound, n, note, scale, chord, arp, gain, speed, pan, cutoff, lpf, hpf, hpq, delay, rev, stack, cat.
- Neovim injection scaffold: strings in those calls are injected as `strdl-mini` when such a sub-grammar becomes available.

Neovim setup
- Copy queries into your Neovim path:
  - npm run local_install
- Filetype detection (place in init.lua or equivalent):

```lua
vim.filetype.add({
  extension = {
    str = "strdl",
    strdl = "strdl",
    strudel = "strdl",
  },
})
```

- nvim-treesitter config:

```lua
require("nvim-treesitter.configs").setup({
  highlight = {
    enable = true,
    additional_vim_regex_highlighting = false,
  },
})
```

- Tips:
  - :TSPlaygroundToggle
  - :TSHighlightCapturesUnderCursor

