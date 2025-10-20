# AGENTS.md

> Sync disclaimer: Keep this document aligned with the current repository purpose and usage.

## Overview
This repository is a Tree-sitter grammar package (library), not an agent-based system. However, downstream tooling (editors, LSPs, CI agents) may consume it. This AGENTS.md enumerates how such tools typically interact with this library.

## Tooling & Integrations
- Editors/Plugins: Neovim nvim-treesitter, other editors via Tree-sitter.
- CLI: tree-sitter CLI (generate, test, playground).
- Language bindings: Node, Go, Python, Rust, Swift expose the compiled grammar.

## Context & Memory
- No persistent agent memory is used by this library. Consumers manage their own context (e.g., editor caches, plugin config).

## Security & Privacy
- No network or secret access. Pure parsing library. No telemetry.

## Development & Testing
- Tests:
  - Grammar corpus tests: `npx tree-sitter test`
  - Node binding test: `npm test`
- Contribution note: add tests first for grammar/metadata changes (e.g., file-types), then implement and run tests.

## Change Log (agent-related)
- 2025-10-20: Documented agent/tool usage for the repo; no runtime agents included.
