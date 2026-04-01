# Personal prompt library

Reusable prompts for Cursor / other assistants. Copy a block, replace `{{placeholders}}`, paste into chat.

## How to use

1. Open the category that matches your task.
2. Pick a template; fill in placeholders in **angle brackets** or `{{like_this}}`.
3. Paste at the start of a message; add file references or `@` symbols in Cursor when useful.
4. Keep one “ground rules” block at the top of big tasks (see `06-ground-rules.md`).

## Index

| File                                                                                                   | Use when                                       |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| [01-planning.md](01-planning.md)                                                                       | Scoping, requirements, tradeoffs, design       |
| [02-implementation.md](02-implementation.md)                                                           | Coding, refactors, migrations                  |
| [03-review-debug.md](03-review-debug.md)                                                               | Reviews, bugs, performance, security           |
| [04-testing-e2e.md](04-testing-e2e.md)                                                                 | Playwright, page objects, test design          |
| [create-e2e-test.md](create-e2e-test.md)                                                               | Strict TS POM E2E with data-testid only        |
| [create-playwright-page-object.md](create-playwright-page-object.md)                                   | New page class; data-testid, actions, asserts  |
| [create-playwright-api-test.md](create-playwright-api-test.md)                                         | API tests via request API; AAA, status + body  |
| [create-playwright-a11y-tests.md](create-playwright-a11y-tests.md)                                     | A11y tests: getByRole, labels, keyboard        |
| [refactor-playwright-test.md](refactor-playwright-test.md)                                             | Refactor tests to strict TS, POM, data-testid  |
| [generate-negative-playwright-tests.md](generate-negative-playwright-tests.md)                         | Negative E2E cases; reuse page objects         |
| [fix-flaky-playwright-test.md](fix-flaky-playwright-test.md)                                           | Stabilize flaky tests; waits + data-testid     |
| [improve-playwright-assertions.md](improve-playwright-assertions.md)                                   | Stronger assertions; AAA; explain improvements |
| [create-playwright-fixtures.md](create-playwright-fixtures.md)                                         | Fixtures, test users, setup/teardown           |
| [create-playwright-test-automation-architecture.md](create-playwright-test-automation-architecture.md) | Full TS Playwright project layout + samples    |
| [05-communication.md](05-communication.md)                                                             | PRs, changelogs, status updates                |
| [06-ground-rules.md](06-ground-rules.md)                                                               | Defaults you want every session to follow      |

## Customizing

- Duplicate this folder outside the repo or keep a private branch if prompts contain sensitive patterns.
- Add a `99-my-prompts.md` for one-liners you invent over time.
