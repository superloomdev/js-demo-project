<div align="center">
  <a href="https://superloom.dev">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/superloomdev/superloom/main/superloom.png" height="80">
      <img alt="Superloom" src="https://raw.githubusercontent.com/superloomdev/superloom/main/superloom.png" height="80">
    </picture>
  </a>
  <h1>js-demo-project</h1>
  <p><strong>JavaScript reference demo application for the Superloom framework.</strong></p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  [![Node.js 24+](https://img.shields.io/badge/Node.js-24%2B-brightgreen.svg)](https://nodejs.org)

</div>

## What's Here

A reference implementation that shows how the Superloom layers fit together end-to-end: model → controller → service → interfaces (Express + Lambda), with the same business logic running unchanged on both.

Use this as a starting point for your own application: clone, rename, and build from here.

## Structure

```
js-demo-project/
  ops/        Operations runbook (numbered, sequential setup guides)
  src/
    model/          Base domain models (pure, IO-free)
    model-server/   Server-only model extensions
    model-client/   Client-only model extensions
    server/         Express + Lambda server (controller, service, interfaces)
```

## Framework Conventions

All architecture decisions, coding standards, and patterns used in this project are defined in the **[superloom](https://github.com/superloomdev/superloom)** repository. Read the framework docs before extending this project.

The helper modules this project depends on live in **[js-helper-modules](https://github.com/superloomdev/js-helper-modules)** and are published as `@superloomdev/*` on GitHub Packages.

## Quick Links

| Resource | Link |
|---|---|
| Framework docs | [superloom.dev/docs](https://superloom.dev/docs/) |
| Getting started | [docs/guide/getting-started](https://superloom.dev/docs/guide/getting-started) |
| Architecture | [docs/foundations/architectural-philosophy](https://superloom.dev/docs/foundations/architectural-philosophy) |
| Helper modules | [github.com/superloomdev/js-helper-modules](https://github.com/superloomdev/js-helper-modules) |

## License

[MIT](LICENSE) — free for commercial use.
