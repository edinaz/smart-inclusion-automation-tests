# Prompt: Add E2E test with Page Object

Use this in Cursor when adding a new UI flow.

```
Add a Playwright E2E test for: [FEATURE].

Constraints:
- Use existing fixtures from fixtures/base.ts; extend if new shared state is needed.
- Add or update a Page Object under pages/ using ONLY data-testid selectors.
- Follow AAA (Arrange, Act, Assert); no hard-coded waits.
- Place the spec under tests/e2e/ and match naming: *.spec.ts
```
