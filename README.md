<div align="center">
  <a href="https://superloom.dev">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/superloomdev/superloom/main/superloom.png" height="80">
      <img alt="Superloom" src="https://raw.githubusercontent.com/superloomdev/superloom/main/superloom.png" height="80">
    </picture>
  </a>
  <h1>JavaScript Demo Project</h1>
  <p>A working example of the Superloom framework layers. Part of <a href="https://superloom.dev">Superloom</a>.</p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  [![Node.js 24+](https://img.shields.io/badge/Node.js-24%2B-brightgreen.svg)](https://nodejs.org)

</div>

## What this is

This is a complete working application. It demonstrates how model, controller, service, and interface layers work together. The same business logic runs on Express and Lambda without duplication. Only the transport adapter changes.

## Why use this project

- **Starting point for new applications.** Fork or clone this repo, rename the packages, and you have a working foundation.

- **Reference for layer patterns.** See how data flows from HTTP request through controller, service, and model layers with clear separation of concerns.

- **Working test setup.** Each layer has its own test suite. Use this as a template for testing your own applications.

- **Demonstrates deployment flexibility.** The same code runs on Docker and AWS Lambda. Only the interface adapter changes. Your business logic stays untouched.

## Architecture Overview

```
js-demo-project/
  ops/              # Operations runbooks (numbered setup guides)
  src/
    model/          # Base domain models (pure, no I/O)
    model-server/   # Server-only model extensions
    model-client/   # Client-only model extensions
    server/         # Express + Lambda interfaces, controllers, services
```

Request flow: HTTP → Interface (Express or Lambda) → Controller → Service → Model → Response.

## Aligned with Superloom Philosophy

This project uses the patterns documented in the Superloom framework. Every architectural decision is explained in the [framework docs](https://superloom.dev/docs/foundations/architectural-philosophy).

## Extended Documentation

- [Framework docs](https://superloom.dev/docs/) — architecture and patterns
- [Getting started](https://superloom.dev/docs/guide/getting-started) — run this demo project
- [Creating entities](https://superloom.dev/docs/guide/creating-entities-js) — add new features to this project

## Adding to Your Project

1. Fork or clone this repository
2. Rename packages in `src/*/package.json`
3. Run `npm install` in each `src/*/` directory
4. Copy `env/` templates and fill in your values
5. Follow the numbered guides in `ops/`

## License

MIT — free for commercial use.
