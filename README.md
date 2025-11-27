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

### Main Parser (`strdl`)
- Filetypes: `.str`, `.strdl`, `.strudel`
- Highlights the JavaScript-like DSL.

### Mini-Notation Parser (`strdl_mini`)
- **New!** A separate grammar for parsing the Tidal mini-notation inside strings.
- Hosted in the `mini/` directory.
- Automatically injected into strings passed to pattern functions (e.g., `s("...")`) via `queries/injections.scm`.

### Neovim Setup

1.  **Install Parsers**:

    You need to register both the main `strudel` parser and the `strudel_mini` parser.

    Create/update `~/.config/nvim/lua/strudel-integration.lua`:

    ```lua
    local parser_config = require("nvim-treesitter.parsers").get_parser_configs()

    -- Main Strudel Parser
    parser_config.strudel = {
      install_info = {
        url = "~/tree-sitter-strdl", -- Path to this repo
        files = { "src/parser.c" },
        branch = "main",
      },
      filetype = "strdl",
    }

    -- Mini-Notation Parser
    parser_config.strudel_mini = {
      install_info = {
        url = "~/tree-sitter-strdl/mini", -- Path to mini subdir
        files = { "src/parser.c" },
        branch = "main",
      },
      filetype = "strdl_mini",
    }
    ```

2.  **Filetype Detection**:

    ```lua
    vim.filetype.add({
      extension = {
        str = "strdl",
        strdl = "strdl",
        strudel = "strdl",
      },
    })
    ```

3.  **Install Queries**:

    Run the local install script to copy queries to your Neovim runtime:

    ```bash
    npm run local_install
    ```

    *Note: Currently, this script copies queries for the main `strudel` language. You may need to manually link or copy `strudel_mini` highlights if/when they are added.*

4.  **Verify**:
    - Open a `.strdl` file.
    - `:TSInstall strudel` and `:TSInstall strudel_mini` (if not auto-installed).
    - Check if `s("bd*4")` has highlighted internals.

