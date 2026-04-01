# Testing & E2E (Playwright-friendly)

## New E2E from acceptance criteria

```
Write a Playwright E2E for:

AC:
1) <given / when / then>
2) ...

Constraints:
- Page object pattern: locators & actions in *.po.ts; spec only orchestrates.
- Prefer getByRole / getByTestId; avoid brittle CSS unless necessary.
- No arbitrary waitForTimeout; use assertions & auto-waiting.
- Read base URL & credentials from env (E2E_BASE_URL, etc.).

Output: spec file + page object updates + any config notes.
```

## Stabilize a flaky test

```
Flaky test: <name / file>
Failure pattern: <intermittent timeout | wrong state | race>

Diagnose likely causes, propose fixes (app waits, test isolation, data setup),
and add observability (trace steps, annotations) if helpful.
```

## Test strategy for a change

```
Change: <summary>

Recommend:
- Unit vs integration vs E2E coverage
- Minimal test list that would catch regressions
- What not to test at E2E layer (and why)
```

## Data setup / teardown

```
Our E2E needs: <state>

Design setup:
- Prefer API/UI helpers in fixtures over raw SQL if possible.
- Make tests independent; avoid order dependence.
- Document required env vars and secrets handling.
```
