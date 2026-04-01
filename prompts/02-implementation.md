# Implementation

## Implement with minimal diff

```
Implement: <feature or fix>

Rules:
- Smallest change that satisfies requirements; no drive-by refactors.
- Match existing style, naming, and patterns in the repo.
- Add or update tests where behavior is non-obvious.

After changes: summarize what changed and why; list files touched.
```

## Refactor safely

```
Refactor: <scope / modules>

Goals: <readability | performance | structure>
Constraints: preserve public behavior; keep commits/PR easy to review.

Plan first (short), then execute in small steps with tests run between steps if applicable.
```

## Add a new API or endpoint

```
Add: <endpoint>

Include:
- Request/response schema (or types)
- Validation & error codes
- Auth / permission checks
- Logging (no secrets)
- Tests: happy path + 2 failure cases

Follow patterns in: <file or module>.
```

## Migration or data change

```
We need a migration for: <schema / data>.

Deliver:
- Forward migration steps
- Backward strategy or explicit “no rollback” with rationale
- Idempotency notes
- How to verify in staging
```
